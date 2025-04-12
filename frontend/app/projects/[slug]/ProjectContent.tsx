'use client';

import { Project } from '@/lib/types';
import { Specialization } from '@/lib/domains';
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
  specializations: Specialization[];
}

export default function ProjectContent({ project, specializations }: ProjectContentProps) {
  const [isApplyPopupOpen, setIsApplyPopupOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleApply = (message: string) => {
    // TODO: Implement application submission
    console.log('Application submitted:', message);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Implement follow functionality
    console.log(isFollowing ? 'Unfollowed project' : 'Followed project');
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Level {project.levelRequirement}+ Required
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            +{project.xpReward} XP Reward
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
            <ProjectTimeline events={project.timeline} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Quests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.quests.map(quest => (
                <QuestCard key={quest.id} quest={quest} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <div className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-lg">{project.status}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Required Skills</dt>
                <dd className="mt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.requiredSkills.map(skill => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Team Members</dt>
                <dd className="mt-1">
                  <ul className="space-y-2">
                    {project.teamMembers.map(member => (
                      <li key={member} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {member}
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
                  className={`${spec.color} px-3 py-1 rounded-full text-sm flex items-center gap-1`}
                >
                  <span>{spec.emoji}</span>
                  <span>{spec.name}</span>
                </span>
              ))}
            </div>
          </div>

          <ContributionChart data={[
            { date: '2024-01-01', count: 3 },
            { date: '2024-01-02', count: 1 },
            { date: '2024-01-03', count: 4 },
            { date: '2024-03-12', count: 4 },
            // Add more data points as needed
          ]} />

          <div className="flex flex-col gap-3">
            <Button
              className="w-full"
              onClick={() => setIsApplyPopupOpen(true)}
            >
              Apply to Project
            </Button>
            <Button
              variant="outline"
              className="w-full relative overflow-hidden"
              onClick={handleFollow}
            >
              <Heart className={cn(
                "mr-2 h-4 w-4 transition-all duration-300",
                isFollowing ? "fill-red-500 text-red-500 animate-float" : "text-gray-500"
              )} />
              {isFollowing ? 'Following' : 'Follow Project'}
            </Button>
          </div>
        </div>
      </div>

      <ApplyProjectPopup
        isOpen={isApplyPopupOpen}
        onClose={() => setIsApplyPopupOpen(false)}
        projectTitle={project.title}
        levelRequirement={project.levelRequirement}
        userLevel={5} // TODO: Get actual user level
        onSubmit={handleApply}
      />
    </div>
  );
} 