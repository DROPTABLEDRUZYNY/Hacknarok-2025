"use client";

import { useState, useEffect } from "react";
import GraphComponent from "@/app/ui/network/network";
import ProjectSelector from "@/app/ui/network/ProjectSelector";
import { projectService } from "@/services/projectService";
import { Project } from "@/lib/types";

export default function NetworkPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await projectService.getAllProjects();
        setProjects(fetchedProjects as any);
        if (fetchedProjects.length > 0) {
          setSelectedProjectId(fetchedProjects[0].id);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-full backdrop-blur">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-[50] flex items-center gap-4">
          <h1 className="text-3xl font-bold text-black">Network</h1>
          {projects.length > 0 && (
            <ProjectSelector
              projects={projects}
              selectedProjectId={selectedProjectId}
              onProjectChange={setSelectedProjectId}
            />
          )}
        </div>

        {selectedProjectId > 0 && (
          <GraphComponent projectId={selectedProjectId} />
        )}
      </div>
    </div>
  );
}
