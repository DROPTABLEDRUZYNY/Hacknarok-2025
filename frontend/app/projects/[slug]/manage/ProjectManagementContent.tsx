'use client';

import { Project } from '@/lib/types';
import { Position, SpecializationDetail } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProjectManagementContentProps {
  project: Project;
  specializations: SpecializationDetail[];
}

export default function ProjectManagementContent({ project, specializations }: ProjectManagementContentProps) {
  const [editedProject, setEditedProject] = useState(project);

  const handleProjectUpdate = (field: keyof Project, value: any) => {
    setEditedProject(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // TODO: Implement API call to save changes
    console.log('Saving project changes:', editedProject);
  };

  const handlePositionUpdate = (positionId: number, field: keyof Position, value: any) => {
    setEditedProject(prev => ({
      ...prev,
      positions: prev.positions.map(position =>
        position.id === positionId ? { ...position, [field]: value } : position
      ),
    }));
  };

  const handleDeletePosition = (positionId: number) => {
    setEditedProject(prev => ({
      ...prev,
      positions: prev.positions.filter(position => position.id !== positionId),
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-4xl font-bold">Manage Project</h1>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <Input
                  value={editedProject.name}
                  onChange={(e) => handleProjectUpdate('name', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <Textarea
                  value={editedProject.description}
                  onChange={(e) => handleProjectUpdate('description', e.target.value)}
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <Select
                  value={editedProject.is_active ? 'active' : 'inactive'}
                  onValueChange={(value) => handleProjectUpdate('is_active', value === 'active')}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Positions</h2>
            <div className="space-y-6">
              {editedProject.positions.map(position => (
                <div key={position.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <Input
                      value={position.title}
                      onChange={(e) => handlePositionUpdate(position.id, 'title', e.target.value)}
                      className="text-lg font-semibold"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeletePosition(position.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <Textarea
                        value={position.description}
                        onChange={(e) => handlePositionUpdate(position.id, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                      <Select
                        value={position.specialization_detail.id.toString()}
                        onValueChange={(value) => {
                          const specialization = specializations.find(spec => spec.id === parseInt(value));
                          if (specialization) {
                            handlePositionUpdate(position.id, 'specialization_detail', specialization);
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {specializations.map(spec => (
                            <SelectItem key={spec.id} value={spec.id.toString()}>
                              {spec.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
                        <div className="flex flex-wrap gap-2">
                          {position.required_skills.map(skill => (
                            <div key={skill.id} className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              <span>{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-1">People Required</label>
                        <div className="flex gap-4">
                          <Input
                            type="number"
                            value={position.people_required_min}
                            onChange={(e) => handlePositionUpdate(position.id, 'people_required_min', parseInt(e.target.value))}
                            className="w-1/2"
                          />
                          <Input
                            type="number"
                            value={position.people_required_max}
                            onChange={(e) => handlePositionUpdate(position.id, 'people_required_max', parseInt(e.target.value))}
                            className="w-1/2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Add New Position</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <Input
                      onChange={(e) => handleProjectUpdate('positions', [...editedProject.positions, {
                        id: Date.now(), // unique id for the new position
                        title: e.target.value,
                        specialization_detail: specializations[0], // assume first specialization for now
                        required_skills: [],
                        people_required_min: 1,
                        people_required_max: 5,
                        description: '',
                        current_interested: 0,
                        application_status: 'open'
                      }])}
                    />
                  </div>
                  <Button
                    onClick={() => {}}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Position
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => {
                    // Для каждой позиции в проекте изменяем специализацию
                    setEditedProject(prev => ({
                      ...prev,
                      positions: prev.positions.map(position => {
                        if (!position.specialization_detail) {
                          return position; // Если специализация не выбрана, ничего не меняем
                        }
                        return {
                          ...position,
                          specialization_detail: position.specialization_detail.id === spec.id
                            ? { id: 0, name: '' } // Снимаем специализацию, если она уже была выбрана
                            : spec // Устанавливаем новую специализацию
                        };
                      })
                    }));
                  }}
                  className={cn(
                    'px-3 py-1 rounded-full text-sm flex items-center gap-1',
                    editedProject.positions.some(position => position.specialization_detail.id === spec.id)
                      ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  )}
                >
                  <span>{spec.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
