import { Project } from './types';

// Load reference data
const referenceData = {
  SPECIALIZATIONS: [
    { id: 1, name: "Software Developer", icon: "code-bracket" },
    { id: 2, name: "Medical Doctor", icon: "heart" },
    { id: 3, name: "Biomedical Engineer", icon: "beaker" },
    { id: 4, name: "Biologist", icon: "bug" },
    { id: 5, name: "Materials Scientist", icon: "cube-transparent" },
    { id: 6, name: "Chemist", icon: "sparkles" },
    { id: 7, name: "Data Analyst", icon: "chart-bar" },
    { id: 8, name: "Marketer", icon: "megaphone" },
    { id: 9, name: "QA Tester", icon: "magnifying-glass" }
  ],
  SKILLS: [
    { id: 1, name: "Embedded Systems" },
    { id: 2, name: "React" },
    { id: 3, name: "C++" },
    { id: 4, name: "Rehabilitation Medicine" },
    { id: 5, name: "Testing Automation" },
    { id: 6, name: "Statistics" },
    { id: 7, name: "Data Visualization" },
    { id: 8, name: "Machine Learning" },
    { id: 9, name: "Python" },
    { id: 10, name: "Medical Imaging" },
    { id: 11, name: "3D Printing" },
    { id: 12, name: "Lab Safety" },
    { id: 13, name: "SEO" },
    { id: 14, name: "Social Media Marketing" },
    { id: 15, name: "Public Speaking" }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Medical Imaging Analysis Platform',
    description: 'Developing a platform for medical professionals to analyze and process medical imaging data using AI.',
    status: 'recruiting',
    timeline: [
      {
        id: '1',
        title: 'Project Kickoff',
        description: 'Initial team meeting and project planning',
        date: '2024-01-01',
        type: 'meeting',
        status: 'completed'
      },
      {
        id: '2',
        title: 'Data Collection Phase',
        description: 'Gather and process medical imaging datasets',
        date: '2024-01-15',
        type: 'milestone',
        status: 'in_progress'
      }
    ],
    requiredSkills: ['Python', 'Machine Learning', 'Medical Imaging', 'Data Visualization'],
    teamMembers: ['John Doe', 'Jane Smith'],
    applicants: [],
    quests: [
      {
        id: '1',
        title: 'Dataset Preparation',
        description: 'Prepare and preprocess medical imaging datasets',
        xpReward: 100,
        type: 'side',
        status: 'available',
        deadline: '2024-01-20'
      },
      {
        id: '2',
        title: 'Model Development',
        description: 'Develop initial ML models for image analysis',
        xpReward: 150,
        type: 'main',
        status: 'in_progress',
        deadline: '2024-01-10'
      }
    ],
    levelRequirement: 3,
    xpReward: 500,
    specializationIds: [2, 3, 7] // Medical Doctor, Biomedical Engineer, Data Analyst
  },
  {
    id: '2',
    title: 'Biomedical Device Development',
    description: 'Creating a new generation of biomedical devices using 3D printing and embedded systems.',
    status: 'in_progress',
    timeline: [
      {
        id: '1',
        title: 'Initial Prototype',
        description: 'Design and create first prototype',
        date: '2024-02-01',
        type: 'task',
        status: 'completed'
      },
      {
        id: '2',
        title: 'Testing Phase',
        description: 'Conduct safety and efficacy tests',
        date: '2024-02-15',
        type: 'milestone',
        status: 'in_progress'
      }
    ],
    requiredSkills: ['Embedded Systems', '3D Printing', 'Lab Safety', 'C++'],
    teamMembers: ['Alice Johnson', 'Bob Wilson'],
    applicants: ['Charlie Brown'],
    quests: [
      {
        id: '1',
        title: 'Safety Testing',
        description: 'Conduct comprehensive safety testing',
        xpReward: 150,
        type: 'main',
        status: 'in_progress',
        deadline: '2024-02-15'
      }
    ],
    levelRequirement: 4,
    xpReward: 800,
    specializationIds: [3, 5, 9] // Biomedical Engineer, Materials Scientist, QA Tester
  },
  {
    id: '3',
    title: 'Healthcare Marketing Platform',
    description: 'Building a platform to help healthcare providers improve their online presence and patient engagement.',
    status: 'recruiting',
    timeline: [
      {
        id: '1',
        title: 'Market Research',
        description: 'Analyze healthcare marketing needs',
        date: '2024-03-01',
        type: 'milestone',
        status: 'upcoming'
      }
    ],
    requiredSkills: ['SEO', 'Social Media Marketing', 'Public Speaking', 'Statistics'],
    teamMembers: ['David Lee'],
    applicants: ['Emma Watson', 'Frank Miller'],
    quests: [
      {
        id: '1',
        title: 'Content Strategy',
        description: 'Develop comprehensive content strategy',
        xpReward: 200,
        type: 'main',
        status: 'available',
        deadline: '2024-03-10'
      }
    ],
    levelRequirement: 5,
    xpReward: 1000,
    specializationIds: [8, 7, 2] // Marketer, Data Analyst, Medical Doctor
  }
];

export const getProject = (id: string): Project | null => {
  return projects.find(project => project.id === id) || null;
}; 