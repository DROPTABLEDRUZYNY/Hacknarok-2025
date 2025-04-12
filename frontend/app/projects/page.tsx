import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';
import { Project } from '@/lib/types';
import ProjectsList from './ProjectsList';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse and find projects to join',
};

async function getProjects(): Promise<Project[]> {
  // Mock data for testing
  const mockProjects: Project[] = [
    {
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
        }
      ],
      levelRequirement: 3,
      xpReward: 500,
      specializationIds: [1, 7]
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      description: 'Building a modern e-commerce platform with advanced features',
      status: 'in_progress',
      timeline: [
        {
          id: '1',
          title: 'Initial Setup',
          description: 'Setting up the development environment',
          date: '2024-02-01',
          type: 'task',
          status: 'completed'
        }
      ],
      requiredSkills: ['Node.js', 'MongoDB', 'React'],
      teamMembers: ['Alice Johnson', 'Bob Wilson'],
      applicants: [],
      quests: [
        {
          id: '1',
          title: 'Setup Database',
          description: 'Configure MongoDB and create initial schemas',
          xpReward: 150,
          type: 'main',
          status: 'in_progress',
          deadline: '2024-02-15'
        }
      ],
      levelRequirement: 4,
      xpReward: 800,
      specializationIds: [1, 3]
    },
    {
      id: '3',
      title: 'AI Chatbot',
      description: 'Developing an intelligent chatbot using machine learning',
      status: 'recruiting',
      timeline: [
        {
          id: '1',
          title: 'Research Phase',
          description: 'Researching ML models and frameworks',
          date: '2024-03-01',
          type: 'milestone',
          status: 'upcoming'
        }
      ],
      requiredSkills: ['Python', 'TensorFlow', 'NLP'],
      teamMembers: ['Charlie Brown'],
      applicants: [],
      quests: [
        {
          id: '1',
          title: 'Model Selection',
          description: 'Evaluate and select appropriate ML models',
          xpReward: 200,
          type: 'main',
          status: 'available',
          deadline: '2024-03-10'
        }
      ],
      levelRequirement: 5,
      xpReward: 1000,
      specializationIds: [4, 7]
    }
  ];

  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 100));

  return mockProjects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const specializations = await getSpecializations();

  return <ProjectsList projects={projects} specializations={specializations} />;
} 