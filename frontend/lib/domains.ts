import fs from 'fs';
import path from 'path';

export interface Specialization {
  id: number;
  name: string;
  emoji: string;
  color: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'In Progress' | 'Completed' | 'Planned';
  startDate: string;
  teamMembers: string[];
  specializationIds: number[];
}

const emojiMap: Record<string, string> = {
  'code-bracket': '💻',
  'heart': '🏥',
  'beaker': '🔬',
  'bug': '🧬',
  'cube-transparent': '🧪',
  'sparkles': '⚗️',
  'chart-bar': '📊',
  'megaphone': '📢',
  'magnifying-glass': '🔍'
};

const colorMap: Record<string, string> = {
  'code-bracket': 'bg-blue-100 text-blue-800',
  'heart': 'bg-red-100 text-red-800',
  'beaker': 'bg-purple-100 text-purple-800',
  'bug': 'bg-green-100 text-green-800',
  'cube-transparent': 'bg-amber-100 text-amber-800',
  'sparkles': 'bg-cyan-100 text-cyan-800',
  'chart-bar': 'bg-indigo-100 text-indigo-800',
  'megaphone': 'bg-pink-100 text-pink-800',
  'magnifying-glass': 'bg-orange-100 text-orange-800'
};

export async function getSpecializations(): Promise<Specialization[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'reference_data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return data.SPECIALIZATIONS.map((spec: any) => ({
      id: spec.id,
      name: spec.name,
      emoji: emojiMap[spec.icon] || '❓',
      color: colorMap[spec.icon] || 'bg-gray-100 text-gray-800',
      description: spec.name
    }));
  } catch (error) {
    console.error('Error loading specializations:', error);
    return [];
  }
} 