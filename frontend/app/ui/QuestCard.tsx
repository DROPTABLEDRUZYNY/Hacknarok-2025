'use client';

import { Quest } from '@/lib/types';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface QuestCardProps {
  quest: Quest;
  onComplete?: () => void;
}

export default function QuestCard({ quest, onComplete }: QuestCardProps) {
  const getStatusColor = () => {
    switch (quest.status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = () => {
    switch (quest.status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5" />;
      case 'in_progress':
        return <ClockIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{quest.title}</h3>
          <p className="text-sm text-gray-500">{quest.type === 'main' ? 'Main Quest' : 'Side Quest'}</p>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {quest.status.replace('_', ' ')}
        </div>
      </div>

      <p className="text-gray-600 mb-4">{quest.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
            +{quest.xpReward} XP
          </div>
          {quest.deadline && (
            <div className="text-gray-500 text-sm">
              Due: {new Date(quest.deadline).toLocaleDateString()}
            </div>
          )}
        </div>

        {quest.status === 'available' && onComplete && (
          <button
            onClick={onComplete}
            className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            Start Quest
          </button>
        )}

        {quest.status === 'in_progress' && onComplete && (
          <button
            onClick={onComplete}
            className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors"
          >
            Complete Quest
          </button>
        )}
      </div>
    </div>
  );
} 