// types.ts
export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string | null;
    specialization?: Specialization[];
    skills?: Skill[];
  }
  
  export interface Specialization {
    id: number;
    name: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
  }
  
  export interface Position {
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
  
  export interface Application {
    id: number;
    user: User;
    position: Position;
    applied_at: string;
    status: string;
  }
  
  export interface Project {
    id: number;
    name: string;
    description: string;
    image: string | null;
    owner: User;
    created_at: string;
    is_active: boolean;
    location: string;
    positions: Position[];
    applications: Application[];
  }
  
  export interface Node {
    id: string;
    name: string;
    type: 'project' | 'user' | 'specialization' | 'skill';
    image?: string;
    color?: string;
    avatar?: string;
  }
  
  export interface Link {
    source: string;
    target: string;
    type?: string;
  }
  
  export interface GraphData {
    nodes: Node[];
    links: Link[];
  }