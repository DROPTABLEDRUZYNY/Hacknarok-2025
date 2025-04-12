export interface Specialization {
  id: number;
  name: string;
  emoji: string;
  color: string;
}

export const specializations: Specialization[] = [
  {
    id: 1,
    name: 'Software Developer',
    emoji: '💻',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 2,
    name: 'UI/UX Designer',
    emoji: '🎨',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 3,
    name: 'Product Manager',
    emoji: '📊',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 4,
    name: 'Data Scientist',
    emoji: '📈',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 5,
    name: 'DevOps Engineer',
    emoji: '🛠️',
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 6,
    name: 'QA Engineer',
    emoji: '🔍',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 7,
    name: 'Data Analyst',
    emoji: '📊',
    color: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 8,
    name: 'Security Engineer',
    emoji: '🔒',
    color: 'bg-gray-100 text-gray-800'
  }
];

export function getSpecializations(): Promise<Specialization[]> {
  return Promise.resolve(specializations);
}

export function getSpecializationById(id: number): Specialization | undefined {
  return specializations.find(spec => spec.id === id);
} 