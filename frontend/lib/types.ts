export interface Skill {
  id: number;
  name: string;
}

export interface SpecializationDetail {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Position {
  id: number;
  project: number;
  title: string;
  specialization_detail: SpecializationDetail;
  required_skills: Skill[];
  people_required_min: number;
  people_required_max: number;
  description: string;
  current_interested: number;
  application_status: string;
}

export interface Application {
  id: number;
  user: User;
  position: Position;
  applied_at: string;
  status: string;
}

export interface Owner extends User {}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string | null;
  owner: Owner;
  created_at: string;
  is_active: boolean;
  location: string;
  positions: Position[];
  applications: Application[];
}
