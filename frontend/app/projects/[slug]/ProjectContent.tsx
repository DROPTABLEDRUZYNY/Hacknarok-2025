'use client';

import { Project } from '@/lib/types';
import { SpecializationDetail } from '@/lib/types';
import ApplyProjectPopup from '@/app/ui/ApplyProjectPopup';
import QuestCard from '@/app/ui/QuestCard';
import ProjectTimeline from '@/app/ui/ProjectTimeline';
import ContributionChart from '@/app/ui/ContributionChart';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProjectContentProps {
  project: Project;
  specializations: SpecializationDetail[];
}

export default function ProjectContent({ project, specializations }: ProjectContentProps) {
  const [isApplyPopupOpen, setIsApplyPopupOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleApply = (message: string) => {
    console.log('Application submitted:', message);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    console.log(isFollowing ? 'Unfollowed project' : 'Followed project');
  };

  const acceptedMembers = project.applications?.filter(app => app.status === 'accepted') || [];

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-4xl font-bold">{project.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <div className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-lg">
                  {project.is_active ? 'Active' : 'Inactive'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Required Skills</dt>
                <dd className="mt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.positions.map((position) =>
                      position.required_skills.map(skill => (
                        <span
                          key={skill.id}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill.name}
                        </span>
                      ))
                    )}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Team Members</dt>
                <dd className="mt-1">
                  <ul className="space-y-2">
                    {acceptedMembers.map(app => (
                      <li key={app.id} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {app.user.first_name} {app.user.last_name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <span
                  key={spec.id}
                  className="px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <span>{spec.name}</span>
                </span>
              ))}
            </div>
          </div>

          <ContributionChart data={[{ date: '2024-01-01', count: 3 }, { date: '2024-01-02', count: 1 }, { date: '2024-01-03', count: 4 }, { date: '2024-03-12', count: 4 }]} />

          <div className="flex flex-col gap-3">
            <Button className="w-full" onClick={() => setIsApplyPopupOpen(true)}>
              Apply to Project
            </Button>
            <Button
              variant="outline"
              className="w-full relative overflow-hidden"
              onClick={handleFollow}
            >
              <Heart className={cn("mr-2 h-4 w-4 transition-all duration-300", isFollowing ? "fill-red-500 text-red-500 animate-float" : "text-gray-500")} />
              {isFollowing ? 'Following' : 'Follow Project'}
            </Button>
          </div>
        </div>
      </div>

      <ApplyProjectPopup
        isOpen={isApplyPopupOpen}
        onClose={() => setIsApplyPopupOpen(false)}
        projectTitle={project.name} 
        userLevel={5} // TODO: Получить фактический уровень пользователя
        onSubmit={handleApply}
      />

    </div>
  );
}
