import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSpecializations } from '@/lib/domains';

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

async function getProjectData(slug: string) {
  // Mock data for testing
  const mockProjects: Record<string, any> = {
    'my-project': {
      title: 'My Awesome Project',
      description: 'This is a sample project description. It demonstrates how the project page will look with real data.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      status: 'In Progress',
      startDate: '2024-01-01',
      teamMembers: ['John Doe', 'Jane Smith', 'Bob Johnson'],
      specializationIds: [1, 7] // Software Developer and Data Analyst
    },
    'another-project': {
      title: 'Another Cool Project',
      description: 'This is another example project to show different content.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      status: 'Completed',
      startDate: '2023-06-15',
      teamMembers: ['Alice Brown', 'Charlie Wilson'],
      specializationIds: [2, 3] // Medical Doctor and Biomedical Engineer
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

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {projectSpecializations.map((spec) => (
                <span
                  key={spec.id}
                  className={`${spec.color} px-3 py-1 rounded-full text-sm flex items-center gap-1`}
                >
                  <span>{spec.emoji}</span>
                  <span>{spec.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-lg">{project.status}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                <dd className="mt-1 text-lg">{project.startDate}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Team Members</dt>
                <dd className="mt-1">
                  <ul className="list-disc list-inside">
                    {project.teamMembers?.map((member: string) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 