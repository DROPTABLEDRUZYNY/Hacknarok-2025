import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CircularProgress } from '@/components/ui/circular-progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserProfileProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: UserProfileProps): Promise<Metadata> {
  return {
    title: `User ${params.slug}`,
    description: `Profile of user ${params.slug}`,
  };
}

async function getUserData(slug: string) {
  // Mock data for testing
  const mockUsers: Record<string, any> = {
    'john-doe': {
      id: '1',
      nickname: 'John Doe',
      avatar: '/avatars/default.png',
      xp: 750,
      maxXp: 1000,
      level: 5,
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
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
      <div className="flex flex-col items-center justify-center">
        <CircularProgress 
          value={user.xp} 
          max={user.maxXp} 
          level={user.level} 
          size={200} 
          strokeWidth={20}
        />
        <span className="text-2xl font-bold mt-4">{user.nickname}</span>
      </div>
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center space-x-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar} alt={user.nickname} />
            <AvatarFallback>{user.nickname[0]}</AvatarFallback>
          </Avatar>
          <div>
            
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href={user.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
} 