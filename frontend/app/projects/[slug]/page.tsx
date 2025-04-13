import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';
import { Project, SpecializationDetail } from '@/lib/types';
import ProjectContent from './ProjectContent';
import { getProject } from '@/lib/generalService';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug); // ждал `await`, иначе получим Promise
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

async function getProjectData(slug: string): Promise<Project | null> {
  // Симуляция задержки, как будто это реальный API вызов
  await new Promise(resolve => setTimeout(resolve, 100));
  return getProject(slug);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectData(params.slug);
  const specializations = await getSpecializations();

  if (!project) {
    notFound();
  }

  // Извлекаем specialization_detail из позиций проекта
  const projectSpecializations: SpecializationDetail[] = project.positions
  .map(pos => pos.specialization_detail)
  .filter(
    (value, index, self) =>
      value && self.findIndex(v => v.id === value.id) === index
  )
  .map(spec => ({
    ...spec,
    color: 'blue',
  }));

  return (
    <ProjectContent
      project={project}
      specializations={projectSpecializations}
    />
  );
}
