import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';
import { Project } from '@/lib/types';
import ProjectManagementContent from './ProjectManagementContent';
import { getProject } from '@/lib/generalService';

interface ProjectManagementPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectManagementPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: `Manage ${project.name}`,
    description: `Manage and edit ${project.name}`,
  };
}

async function getProjectData(slug: string): Promise<Project | null> {
  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return getProject(slug);
}

export default async function ProjectManagementPage({
  params,
}: ProjectManagementPageProps) {
  const project = await getProjectData(params.slug);
  const specializations = await getSpecializations();

  if (!project) {
    notFound();
  }

  // Filter specializations based on project's specializationIds
  // Получаем все специализации из позиции проекта
  const projectSpecializations = specializations.filter((spec) =>
    project.positions.some(pos => pos.specialization_detail.id === spec.id)
  );


  return (
    <ProjectManagementContent
      project={project}
      specializations={projectSpecializations}
    />
  );
}
