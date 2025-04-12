import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, GitBranch, Trophy, MessageSquare, CheckCircleIcon } from 'lucide-react';

interface FeedItemProps {
  type: 'contribution' | 'achievement' | 'comment' | 'project';
  title: string;
  description: string;
  date: string;
  projectName?: string;
}

const icons = {
  contribution: GitBranch,
  achievement: Trophy,
  comment: MessageSquare,
  project: GitBranch,
};

const colors = {
  contribution: 'text-blue-500 bg-blue-100',
  achievement: 'text-yellow-500 bg-yellow-100',
  comment: 'text-green-500 bg-green-100',
  project: 'text-purple-500 bg-purple-100',
};

export default function FeedItem({ type, title, description, date, projectName }: FeedItemProps) {
  const Icon = icons[type];
  const color = colors[type];

  return (
    <div className="relative pl-8">
      {/* Timeline line */}
      <div className="absolute left-3 top-4 bottom-0 w-0.5 bg-gray-200" />

      {/* Timeline dot */}
      <div className={cn(
        "absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center",
        color
      )}>
        <Icon className="w-4 h-4" />
      </div>

      {/* Event content */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {new Date(date).toLocaleDateString()}
          </div>
        </div>

        <p className="text-gray-600 mb-2">{description}</p>

        {projectName && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Project:</span>
            <span className="font-medium">{projectName}</span>
          </div>
        )}

        <div className="mt-2">
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            color
          )}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
} 