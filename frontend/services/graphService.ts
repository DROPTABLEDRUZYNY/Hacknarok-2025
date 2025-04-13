interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
}

interface Specialization {
  id: number;
  name: string;
}

interface Skill {
  id: number;
  name: string;
}

interface Position {
  id: number;
  project: number;
  title: string;
  specialization_detail: Specialization;
  required_skills: Skill[];
  people_required_min: number;
  people_required_max: number;
  description: string;
  current_interested: number;
  application_status: string | null;
}

interface Application {
  id: number;
  user: User;
  position: Position;
  applied_at: string;
  status: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  owner: User;
  created_at: string;
  is_active: boolean;
  location: string;
  positions: Position[];
  applications: Application[];
}

interface Node {
  id: string;
  name: string;
  type: "project" | "user" | "specialization";
  image?: string;
  color?: string;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

const API_BASE_URL = "http://localhost:8000/api";

export async function fetchProjectData(projectId: number): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/projects/${projectId}/`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch project data");
  }
  return response.json();
}

export async function fetchAllPositions(): Promise<Position[]> {
  const response = await fetch(`${API_BASE_URL}/positions/`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch positions");
  }
  return response.json();
}

export function transformProjectToGraphData(project: Project): GraphData {
  const nodes: Node[] = [];
  const links: Link[] = [];

  // Add project node
  const projectNodeId = `project-${project.id}`;
  nodes.push({
    id: projectNodeId,
    name: project.name,
    type: "project",
    image: project.image,
    color: "#4F46E5", // Indigo color for projects
  });

  // Add owner node and link
  const ownerNodeId = `user-${project.owner.id}`;
  nodes.push({
    id: ownerNodeId,
    name: `${project.owner.first_name} ${project.owner.last_name}`,
    type: "user",
    image: project.owner.avatar || undefined,
    color: "#10B981", // Green color for users
  });
  links.push({
    source: ownerNodeId,
    target: projectNodeId,
  });

  let imagesForSpecializations = new Map<string, string>();
  imagesForSpecializations.set(
    "Software Developer",
    "./specializations/software_developer.png"
  );
  imagesForSpecializations.set(
    "Data Analyst",
    "./specializations/data_analyst.png"
  );
  imagesForSpecializations.set("Marketer", "./specializations/marketer.png");
  imagesForSpecializations.set("Chemist", "./specializations/chemist.png");
  imagesForSpecializations.set("Biologist", "./specializations/biologist.png");
  imagesForSpecializations.set(
    "Biomedical Engineer",
    "./specializations/software_developer.png"
  );
  imagesForSpecializations.set(
    "Mechanical Engineer",
    "./specializations/biomedical_engineer.png"
  );
  imagesForSpecializations.set("QA Tester", "./specializations/qa_tester.png");
  imagesForSpecializations.set(
    "Medical Doctor",
    "./specializations/medical_doctor.png"
  );
  imagesForSpecializations.set(
    "Materials Scientist",
    "./specializations/material_scientist.png"
  );
  // Add specialization nodes and links
  project.positions.forEach((position) => {
    const specializationNodeId = `specialization-${position.specialization_detail.id}`;

    // Add specialization node if not already added
    if (!nodes.some((node) => node.id === specializationNodeId)) {
      nodes.push({
        id: specializationNodeId,
        name: position.specialization_detail.name,
        type: "specialization",
        image: imagesForSpecializations.get(
          position.specialization_detail.name
        ),
        color: "#F59E0B", // Amber color for specializations
      });
    }

    // Link project to specialization
    links.push({
      source: projectNodeId,
      target: specializationNodeId,
    });

    // Add users who applied for positions
    project.applications.forEach((application) => {
      if (application.position.id === position.id) {
        const userNodeId = `user-${application.user.id}`;

        // Add user node if not already added
        if (!nodes.some((node) => node.id === userNodeId)) {
          nodes.push({
            id: userNodeId,
            name: `${application.user.first_name} ${application.user.last_name}`,
            type: "user",
            image: application.user.avatar || undefined,
            color: "#10B981",
          });
        }

        // Link user to specialization
        links.push({
          source: userNodeId,
          target: specializationNodeId,
        });
      }
    });
  });

  return { nodes, links };
}

export async function getGraphData(projectId: number): Promise<GraphData> {
  const project = await fetchProjectData(projectId);
  return transformProjectToGraphData(project);
}
