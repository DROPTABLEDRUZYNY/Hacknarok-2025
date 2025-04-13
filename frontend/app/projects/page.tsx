import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';
import { Project } from '@/lib/types';
import ProjectsList from './ProjectsList';
import { projects } from '@/lib/generalService';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse and find projects to join',
};

async function getProjects(): Promise<Project[]> {
  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const specializations = await getSpecializations();

  return <ProjectsList projects={projects} specializations={specializations} />;
} 