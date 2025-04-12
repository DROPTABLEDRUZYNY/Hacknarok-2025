export interface User {
  id: string;
  name: string;
  level: number;
  xp: number;
  completedQuests: string[];
  skills: string[];
  avatar?: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  type: 'main' | 'side';
  status: 'available' | 'help_needed' | 'in_progress' | 'completed';
  deadline?: string;
  projectId?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'recruiting' | 'in_progress' | 'completed';
  timeline: TimelineEvent[];
  requiredSkills: string[];
  teamMembers: string[];
  applicants: string[];
  quests: Quest[];
  levelRequirement: number;
  xpReward: number;
  specializationIds: number[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'milestone' | 'task' | 'meeting';
  status: 'upcoming' | 'in_progress' | 'completed';
}

export interface Application {
  id: string;
  userId: string;
  projectId: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedAt: string;
} 