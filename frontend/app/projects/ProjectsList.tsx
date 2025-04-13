"use client";

import { Project } from "@/lib/types";
import { Specialization } from "@/lib/domains";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CreateProjectPopup from "@/app/ui/CreateProjectPopup";

interface ProjectsListProps {
  projects: Project[];
  specializations: Specialization[];
}

const ProjectsList = ({ projects, specializations }: ProjectsListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedSpecializations, setSelectedSpecializations] = useState<number[]>([]);
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    // Fetch user profile
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/users/me/');
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const calculateProjectMatchScore = (project: Project) => {
    if (!userProfile) return 0;

    let totalScore = 0;
    let positionCount = 0;

    project.positions.forEach(position => {
      positionCount++;
      
      // Check spec. match
      const hasMatchingSpecialization = userProfile.specialization.some(
        (userSpec: any) => userSpec.id === position.specialization_detail.id
      );
      
      if (hasMatchingSpecialization) {
        totalScore += 2; // 2x val for matching specialization
      }

      // Check skills match
      const userSkills = userProfile.skills.map((skill: any) => skill.id);
      const matchingSkills = position.required_skills.filter(
        (skill: any) => userSkills.includes(skill.id)
      ).length;
      
      const skillMatchRatio = matchingSkills / position.required_skills.length;
      totalScore += skillMatchRatio; //1xval for skills
    });

    // avg score for project
    return positionCount > 0 ? totalScore / positionCount : 0;
  };

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.positions.some((position) =>
          position.required_skills.some((skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );

      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "recruiting" && project.is_active) ||
        (selectedStatus === "completed" && !project.is_active);

      const matchesSpecializations =
        selectedSpecializations.length === 0 ||
        project.positions.some((position) =>
          selectedSpecializations.includes(position.specialization_detail.id)
        );

      return matchesSearch && matchesStatus && matchesSpecializations;
    })
    .sort((a, b) => {
      // Sort by match score
      const scoreA = calculateProjectMatchScore(a);
      const scoreB = calculateProjectMatchScore(b);
      return scoreB - scoreA;
    });

  const toggleSpecialization = (id: number) => {
    setSelectedSpecializations((prev) =>
      prev.includes(id) ? prev.filter((specId) => specId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Button 
          className="flex items-center gap-2"
          onClick={() => setIsCreateProjectOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Create Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="recruiting">Recruiting</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specializations
                </label>
                <div className="space-y-2">
                  {specializations.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => toggleSpecialization(spec.id)}
                      className={cn(
                        spec.color,
                        "w-full px-3 py-2 rounded-md text-sm flex items-center gap-2",
                        selectedSpecializations.includes(spec.id)
                          ? "ring-2 ring-offset-2 ring-blue-500"
                          : ""
                      )}
                    >
                      <span>{spec.emoji}</span>
                      <span>{spec.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-500">
                No projects found matching your criteria.
              </p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold">{project.name}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div
                        className={cn(
                          "px-2 py-1 rounded-full text-sm font-medium",
                          project.is_active
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        )}
                      >
                        {project.is_active ? "Recruiting" : "Completed"}
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button>View Project</Button>
                  </Link>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Positions & Skills
                    </h3>
                    {project.positions.map((position) => (
                      <div key={position.id} className="mb-2">
                        <p className="font-medium">{position.title}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {position.required_skills.map((skill) => (
                            <span
                              key={skill.id}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.positions.map((position) => {
                        const spec = specializations.find(
                          (s) => s.id === position.specialization_detail.id
                        );
                        if (!spec) return null;
                        return (
                          <span
                            key={position.id}
                            className={cn(
                              spec.color,
                              "px-3 py-1 rounded-full text-sm flex items-center gap-1"
                            )}
                          >
                            <span>{spec.emoji}</span>
                            <span>{spec.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Applicants
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.applications.map((app) => (
                        <span
                          key={app.id}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {app.user.first_name} {app.user.last_name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <CreateProjectPopup 
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
      />
    </div>
  );
};

export default ProjectsList;
