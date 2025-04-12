import React from 'react';
import { cn } from '@/lib/utils';

interface Badge {
  name: string;
  icon: string;
}

interface ProfileBadgeProps {
  badge: Badge;
}

export default function ProfileBadge({ badge }: ProfileBadgeProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center bg-gray-100 rounded-full transition-all duration-300",
        "hover:bg-gray-200 hover:shadow-md"
      )}
    >
      <div className="flex items-center px-2 py-1">
        <span className="text-lg">{badge.icon}</span>
        <span
          className={cn(
            "ml-0 text-sm font-medium whitespace-nowrap",
            "max-w-0 overflow-hidden transition-all duration-300",
            "group-hover:max-w-[200px] group-hover:ml-2",
            "opacity-0 group-hover:opacity-100"
          )}
        >
          {badge.name}
        </span>
      </div>
    </div>
  );
}
