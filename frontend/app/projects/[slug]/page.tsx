import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';
import { Project } from '@/lib/types';
import ProjectContent from './ProjectContent';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  // TODO: Fetch project data and return metadata
  return {
    title: `Project ${params.slug}`,
    description: `Details about project ${params.slug}`,
  };
}

async function getProjectData(slug: string): Promise<Project | null> {
  // Mock data for testing
  const mockProjects: Record<string, Project> = {
    'my-project': {
      id: '1',
      title: 'My Awesome Project',
      description: 'This is a sample project description. It demonstrates how the project page will look with real data.',
      status: 'recruiting',
      timeline: [
        {
          id: '1',
          title: 'Project Kickoff',
          description: 'Initial team meeting and project planning',
          date: '2024-01-01',
          type: 'meeting',
          status: 'completed'
        },
        {
          id: '2',
          title: 'Design Phase',
          description: 'Create project design and wireframes',
          date: '2024-01-15',
          type: 'milestone',
          status: 'in_progress'
        },
        {
          id: '3',
          title: 'Development Start',
          description: 'Begin implementation of core features',
          date: '2024-02-01',
          type: 'task',
          status: 'upcoming'
        }
      ],
      requiredSkills: ['React', 'TypeScript', 'Next.js'],
      teamMembers: ['John Doe', 'Jane Smith'],
      applicants: [],
      quests: [
        {
          id: '1',
          title: 'Create Project Logo',
          description: 'Design and create a logo for the project',
          xpReward: 100,
          type: 'side',
          status: 'available',
          deadline: '2024-01-20'
        },
        {
          id: '2',
          title: 'Setup Development Environment',
          description: 'Configure the development environment and tools',
          xpReward: 50,
          type: 'main',
          status: 'in_progress',
          deadline: '2024-01-10'
        }
      ],
      levelRequirement: 3,
      xpReward: 500,
      specializationIds: [1, 7] // Software Developer and Data Analyst
    }
  };

  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 100));

  return mockProjects[slug] || null;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectData(params.slug);
  const specializations = await getSpecializations();

  if (!project) {
    notFound();
  }

  // Filter specializations based on project's specializationIds
  const projectSpecializations = specializations.filter(spec => 
    project.specializationIds.includes(spec.id)
  );

  return <ProjectContent project={project} specializations={projectSpecializations} />;
} 