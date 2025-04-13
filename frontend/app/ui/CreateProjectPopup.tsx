'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { Plus, X, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Specialization {
  id: number;
  name: string;
  icon: string;
  image: string;
}

interface Skill {
  id: number;
  name: string;
}

interface WorkPosition {
  title: string;
  specialization: number;
  required_skills: string[];
  people_required_min: number;
  people_required_max: number;
  description: string;
}

interface CreateProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateProjectPopup({
  isOpen,
  onClose,
}: CreateProjectPopupProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    image: null as File | null,
  });
  const [positions, setPositions] = useState<WorkPosition[]>([
    {
      title: '',
      specialization: 1, // Default to first specialization
      required_skills: [],
      people_required_min: 1,
      people_required_max: 1,
      description: '',
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Load specializations and skills from reference_data.json
  const specializations: Specialization[] = [
    { id: 1, name: "Software Developer", icon: "code-bracket", image: "./specializations/software_developer.png" },
    { id: 2, name: "Medical Doctor", icon: "heart", image: "./specializations/software_developer.png" },
    { id: 3, name: "Biomedical Engineer", icon: "beaker", image: "./specializations/software_developer.png" },
    { id: 4, name: "Biologist", icon: "bug", image: "./specializations/software_developer.png" },
    { id: 5, name: "Materials Scientist", icon: "cube-transparent", image: "./specializations/software_developer.png" },
    { id: 6, name: "Chemist", icon: "sparkles", image: "./specializations/software_developer.png" },
    { id: 7, name: "Data Analyst", icon: "chart-bar", image: "./specializations/software_developer.png" },
    { id: 8, name: "Marketer", icon: "megaphone", image: "./specializations/software_developer.png" },
    { id: 9, name: "QA Tester", icon: "magnifying-glass", image: "./specializations/software_developer.png" }
  ];

  const allSkills: Skill[] = [
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
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePositionChange = (index: number, field: keyof WorkPosition, value: any) => {
    setPositions(prev => prev.map((pos, i) => 
      i === index ? { ...pos, [field]: value } : pos
    ));
  };

  const addPosition = () => {
    setPositions(prev => [...prev, {
      title: '',
      specialization: specializations[0]?.id || 0,
      required_skills: [],
      people_required_min: 1,
      people_required_max: 1,
      description: '',
    }]);
  };

  const removePosition = (index: number) => {
    setPositions(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First create the project
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('location', formData.location);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const projectResponse = await fetch('/api/projects/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!projectResponse.ok) {
        throw new Error('Failed to create project');
      }

      const projectData = await projectResponse.json();

      // Then create positions
      for (const position of positions) {
        const positionResponse = await fetch('/api/workpositions/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...position,
            project: projectData.id,
          }),
        });

        if (!positionResponse.ok) {
          throw new Error('Failed to create position');
        }
      }

      router.refresh();
      onClose();
    } catch (error) {
      console.error('Error creating project:', error);
      // TODO: Add error handling UI
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[770px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new project. You can add multiple positions with different requirements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Enter project location (optional)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Project Image</Label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Upload className="h-4 w-4" />
                    <span className="text-sm">Upload Image</span>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-20 w-20 object-cover rounded-md"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your project..."
                className="min-h-[200px]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Positions</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addPosition}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Position
              </Button>
            </div>

            {positions.map((position, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-medium">Position {index + 1}</h4>
                  {positions.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removePosition(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={position.title}
                      onChange={(e) => handlePositionChange(index, 'title', e.target.value)}
                      placeholder="Position title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Specialization</Label>
                    <select
                      value={position.specialization}
                      onChange={(e) => handlePositionChange(index, 'specialization', parseInt(e.target.value))}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      {specializations.map((spec) => (
                        <option key={spec.id} value={spec.id}>
                          {spec.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Required Skills</Label>
                    <select
                      multiple
                      value={position.required_skills}
                      onChange={(e) => {
                        const values = Array.from(e.target.selectedOptions, option => option.value);
                        handlePositionChange(index, 'required_skills', values);
                      }}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm h-28"
                    >
                      {allSkills.map((skill) => (
                        <option key={skill.id} value={skill.id}>
                          {skill.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>People Required</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="1"
                        value={position.people_required_min}
                        onChange={(e) => handlePositionChange(index, 'people_required_min', parseInt(e.target.value))}
                        className="w-20"
                        required
                      />
                      <span>to</span>
                      <Input
                        type="number"
                        min={position.people_required_min}
                        value={position.people_required_max}
                        onChange={(e) => handlePositionChange(index, 'people_required_max', parseInt(e.target.value))}
                        className="w-20"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-2 space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={position.description}
                      onChange={(e) => handlePositionChange(index, 'description', e.target.value)}
                      placeholder="Describe the position..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 