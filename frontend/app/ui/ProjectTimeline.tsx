'use client';

import { TimelineEvent } from '@/lib/types';
import { CheckCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface ProjectTimelineProps {
  events: TimelineEvent[];
}

export default function ProjectTimeline({ events }: ProjectTimelineProps) {
  const getStatusColor = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5" />;
      case 'in_progress':
        return <ClockIcon className="h-5 w-5" />;
      default:
        return <CalendarIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.id} className="relative pl-8">
          {/* Timeline line */}
          {index !== events.length - 1 && (
            <div className="absolute left-3 top-4 bottom-0 w-0.5 bg-gray-200" />
          )}

          {/* Timeline dot */}
          <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
            {getStatusIcon(event.status)}
          </div>

          {/* Event content */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                {event.status.replace('_', ' ')}
              </div>
            </div>

            <p className="text-gray-600 mb-2">{event.description}</p>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.type === 'milestone' ? 'bg-purple-100 text-purple-800' :
                event.type === 'task' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {event.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 