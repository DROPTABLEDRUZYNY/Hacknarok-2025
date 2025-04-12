import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CircularProgress } from '@/components/ui/circular-progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProfileBadge from '@/components/ProfileBadge';
import FeedItem from '@/components/FeedItem';

interface UserProfileProps {
  params: {
    slug: string;
  };
}

interface Badge {
  name: string;
  icon: string;
}

interface UserStats {
  projectsCompleted: number;
  questsCompleted: number;
  contributions: number;
  streak: number;
  badges: Badge[];
}

interface FeedItem {
  id: string;
  type: 'contribution' | 'achievement' | 'comment' | 'project';
  title: string;
  description: string;
  date: string;
  projectName?: string;
}

interface User {
  id: string;
  nickname: string;
  avatar: string;
  xp: number;
  maxXp: number;
  level: number;
  github: string;
  twitter: string;
  stats: UserStats;
  activities: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    type: string;
    status: string;
  }>;
  contributions: Array<{
    date: string;
    count: number;
  }>;
  skills: string[];
  projects: string[];
  specializations: Array<{
    id: number;
    name: string;
    emoji: string;
    color: string;
  }>;
  feed: FeedItem[];
}

export async function generateMetadata({ params }: UserProfileProps): Promise<Metadata> {
  return {
    title: `User ${params.slug}`,
    description: `Profile of user ${params.slug}`,
  };
}

async function getUserData(slug: string): Promise<User | null> {
  // Mock data for testing
  const mockUsers: Record<string, User> = {
    'john-doe': {
      id: '1',
      nickname: 'John Doe',
      avatar: '/avatars/default.png',
      xp: 750,
      maxXp: 1000,
      level: 5,
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      stats: {
        projectsCompleted: 12,
        questsCompleted: 45,
        contributions: 128,
        streak: 7,
        badges: [
          { name: 'Early Adopter', icon: '🚀' },
          { name: 'Code Master', icon: '👨‍💻' },
          { name: 'Team Player', icon: '🤝' }
        ]
      },
      activities: [
        {
          id: '1',
          title: 'Created new project',
          description: 'Started working on a new project',
          date: '2024-04-12',
          type: 'project',
          status: 'completed'
        },
        {
          id: '2',
          title: 'Made contribution',
          description: 'Contributed to an open source project',
          date: '2024-04-11',
          type: 'contribution',
          status: 'completed'
        },
        {
          id: '3',
          title: 'Earned new badge',
          description: 'Achieved level 5',
          date: '2024-04-10',
          type: 'achievement',
          status: 'completed'
        }
      ],
      contributions: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(2024, 3, i + 1).toISOString(),
        count: Math.floor(Math.random() * 10),
      })),
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js'],
      projects: ['Project A', 'Project B', 'Project C'],
      specializations: [
        { id: 1, name: 'Software Developer', emoji: '💻', color: 'bg-blue-100 text-blue-800' },
        { id: 7, name: 'Data Analyst', emoji: '📊', color: 'bg-purple-100 text-purple-800' }
      ],
      feed: [
        {
          id: '1',
          type: 'contribution',
          title: 'Added new feature',
          description: 'Implemented user authentication system',
          date: '2024-04-12',
          projectName: 'Project A'
        },
        {
          id: '2',
          type: 'achievement',
          title: 'Level Up!',
          description: 'Reached level 5',
          date: '2024-04-11'
        },
        {
          id: '3',
          type: 'comment',
          title: 'Code review',
          description: 'Left feedback on pull request #123',
          date: '2024-04-10',
          projectName: 'Project B'
        },
        {
          id: '4',
          type: 'project',
          title: 'New project',
          description: 'Started working on Project C',
          date: '2024-04-09',
          projectName: 'Project C'
        }
      ]
    }
  };

  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 100));

  return mockUsers[slug] || null;
}

export default async function UserProfile({ params }: UserProfileProps) {
  const user = await getUserData(params.slug);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex flex-col items-center space-y-4">
        <CircularProgress 
          value={user.xp} 
          max={user.maxXp} 
          level={user.level} 
          size={200} 
        />
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{user.stats.projectsCompleted}</span>
              <span className="text-sm text-gray-500">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{user.stats.questsCompleted}</span>
              <span className="text-sm text-gray-500">Quests</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{user.stats.contributions}</span>
              <span className="text-sm text-gray-500">Contributions</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">🔥</span>
            <span className="text-sm font-medium">{user.stats.streak} day streak</span>
          </div>
          <div className="flex space-x-2">
            {user.stats.badges.map((badge, index) => (
              <ProfileBadge key={index} badge={badge} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
            </div>
            <div className="p-6">
              {user.feed.map((item, index) => (
                <FeedItem
                  key={item.id}
                  type={item.type}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  projectName={item.projectName}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold">Projects</h2>
            </div>
            <div className="divide-y">
              {user.projects.map((project, index) => (
                <div key={index} className="py-4">
                  <h3 className="text-xl font-semibold">{project}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            <div className="divide-y">
              {user.skills.map((skill, index) => (
                <div key={index} className="py-4">
                  <h3 className="text-xl font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold">Specializations</h2>
            </div>
            <div className="divide-y">
              {user.specializations.map((specialization, index) => (
                <div key={index} className="py-4">
                  <h3 className="text-xl font-semibold">{specialization.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 