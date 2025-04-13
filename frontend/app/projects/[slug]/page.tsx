import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';
import { Project } from '@/lib/types';
import ProjectContent from './ProjectContent';
import { getProject } from '@/lib/generalService';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

async function getProjectData(slug: string): Promise<Project | null> {
  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return getProject(slug);
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