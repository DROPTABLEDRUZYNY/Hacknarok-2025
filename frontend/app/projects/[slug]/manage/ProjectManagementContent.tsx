'use client';

import { Project } from '@/lib/types';
import { Specialization } from '@/lib/domains';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProjectManagementContentProps {
  project: Project;
  specializations: Specialization[];
}

export default function ProjectManagementContent({ project, specializations }: ProjectManagementContentProps) {
  const [editedProject, setEditedProject] = useState(project);
  const [newQuest, setNewQuest] = useState({
    title: '',
    description: '',
    xpReward: 0,
    type: 'main' as const,
    status: 'available' as const,
    deadline: ''
  });

  const calculateXpCap = (level: number) => level * 500;
  const xpCap = calculateXpCap(editedProject.levelRequirement);
  const isXpOverCap = editedProject.xpReward > xpCap;
  
  const totalQuestXp = editedProject.quests.reduce((sum, quest) => sum + quest.xpReward, 0);
  const isTotalQuestXpOverCap = totalQuestXp > xpCap;

  const handleProjectUpdate = (field: keyof Project, value: any) => {
    setEditedProject(prev => ({ ...prev, [field]: value }));
  };

  const handleQuestUpdate = (questId: string, field: keyof Project['quests'][0], value: any) => {
    setEditedProject(prev => ({
      ...prev,
      quests: prev.quests.map(quest => 
        quest.id === questId ? { ...quest, [field]: value } : quest
      )
    }));
  };

  const handleAddQuest = () => {
    if (!newQuest.title || !newQuest.description) return;
    if (totalQuestXp + newQuest.xpReward > xpCap) {
      alert(`Cannot add quest: Total XP would exceed the project's XP cap of ${xpCap}`);
      return;
    }

    const quest = {
      ...newQuest,
      id: Date.now().toString(),
      projectId: project.id
    };

    setEditedProject(prev => ({
      ...prev,
      quests: [...prev.quests, quest]
    }));

    setNewQuest({
      title: '',
      description: '',
      xpReward: 0,
      type: 'main',
      status: 'available',
      deadline: ''
    });
  };

  const handleDeleteQuest = (questId: string) => {
    setEditedProject(prev => ({
      ...prev,
      quests: prev.quests.filter(quest => quest.id !== questId)
    }));
  };

  const handleSave = () => {
    // TODO: Implement API call to save changes
    console.log('Saving project changes:', editedProject);
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
                  value={editedProject.title}
                  onChange={(e) => handleProjectUpdate('title', e.target.value)}
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
                  value={editedProject.status}
                  onValueChange={(value) => handleProjectUpdate('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recruiting">Recruiting</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Quests</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Total Quest XP: {totalQuestXp}</span>
                {isTotalQuestXpOverCap && (
                  <span className="text-red-500 font-medium">
                    Total quest XP exceeds cap by {totalQuestXp - xpCap}
                  </span>
                )}
              </div>
              {editedProject.quests.map(quest => (
                <div key={quest.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <Input
                      value={quest.title}
                      onChange={(e) => handleQuestUpdate(quest.id, 'title', e.target.value)}
                      className="text-lg font-semibold"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteQuest(quest.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <Textarea
                        value={quest.description}
                        onChange={(e) => handleQuestUpdate(quest.id, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <Select
                          value={quest.type}
                          onValueChange={(value) => handleQuestUpdate(quest.id, 'type', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="main">Main Quest</SelectItem>
                            <SelectItem value="side">Side Quest</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <Select
                          value={quest.status}
                          onValueChange={(value) => handleQuestUpdate(quest.id, 'status', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Available</SelectItem>
                            <SelectItem value="help_needed">Help Needed</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">XP Reward</label>
                        <div className="space-y-2">
                          <Input
                            type="number"
                            value={quest.xpReward}
                            onChange={(e) => {
                              const newXp = parseInt(e.target.value);
                              const otherQuestsXp = totalQuestXp - quest.xpReward;
                              if (otherQuestsXp + newXp > xpCap) {
                                alert(`Cannot set XP: Total quest XP would exceed the project's XP cap of ${xpCap}`);
                                return;
                              }
                              handleQuestUpdate(quest.id, 'xpReward', newXp);
                            }}
                            className={cn(
                              quest.xpReward > xpCap && "border-red-500 focus-visible:ring-red-500"
                            )}
                          />
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">XP Cap: {xpCap}</span>
                            {quest.xpReward > xpCap && (
                              <span className="text-red-500 font-medium">
                                XP reward exceeds cap by {quest.xpReward - xpCap}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                        <Input
                          type="date"
                          value={quest.deadline}
                          onChange={(e) => handleQuestUpdate(quest.id, 'deadline', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Add New Quest</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <Input
                      value={newQuest.title}
                      onChange={(e) => setNewQuest(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <Textarea
                      value={newQuest.description}
                      onChange={(e) => setNewQuest(prev => ({ ...prev, description: e.target.value }))}
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <Select
                        value={newQuest.type}
                        onValueChange={(value: 'main' | 'side') => setNewQuest((prev) => {
                          // Explicitly type the return value to match newQuest type
                          return {
                            ...prev,
                            type: value as 'main' // Assert type to match newQuest.type
                          };
                        })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="main">Main Quest</SelectItem>
                          <SelectItem value="side">Side Quest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">XP Reward</label>
                      <div className="space-y-2">
                        <Input
                          type="number"
                          value={newQuest.xpReward}
                          onChange={(e) => {
                            const newXp = parseInt(e.target.value);
                            if (totalQuestXp + newXp > xpCap) {
                              alert(`Cannot set XP: Total quest XP would exceed the project's XP cap of ${xpCap}`);
                              return;
                            }
                            setNewQuest(prev => ({ ...prev, xpReward: newXp }));
                          }}
                          className={cn(
                            newQuest.xpReward > xpCap && "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">XP Cap: {xpCap}</span>
                          {newQuest.xpReward > xpCap && (
                            <span className="text-red-500 font-medium">
                              XP reward exceeds cap by {newQuest.xpReward - xpCap}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                    <Input
                      type="date"
                      value={newQuest.deadline}
                      onChange={(e) => setNewQuest(prev => ({ ...prev, deadline: e.target.value }))}
                    />
                  </div>
                  <Button
                    onClick={handleAddQuest}
                    className="w-full flex items-center justify-center gap-2"
                    disabled={!newQuest.title || !newQuest.description}
                  >
                    <Plus className="h-4 w-4" />
                    Add Quest
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Level Requirement</label>
                <Input
                  type="number"
                  value={editedProject.levelRequirement}
                  onChange={(e) => handleProjectUpdate('levelRequirement', parseInt(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">XP Reward</label>
                <div className="space-y-2">
                  <Input
                    type="number"
                    value={editedProject.xpReward}
                    onChange={(e) => handleProjectUpdate('xpReward', parseInt(e.target.value))}
                    className={cn(
                      isXpOverCap && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">XP Cap: {xpCap}</span>
                    {isXpOverCap && (
                      <span className="text-red-500 font-medium">
                        XP reward exceeds cap by {editedProject.xpReward - xpCap}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
                <div className="flex flex-wrap gap-2">
                  {editedProject.requiredSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      <span>{skill}</span>
                      <button
                        onClick={() => handleProjectUpdate('requiredSkills', editedProject.requiredSkills.filter((_, i) => i !== index))}
                        className="text-blue-800 hover:text-blue-900"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <Input
                    placeholder="Add new skill"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value) {
                        handleProjectUpdate('requiredSkills', [...editedProject.requiredSkills, e.currentTarget.value]);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => {
                    const newIds = editedProject.specializationIds.includes(spec.id)
                      ? editedProject.specializationIds.filter(id => id !== spec.id)
                      : [...editedProject.specializationIds, spec.id];
                    handleProjectUpdate('specializationIds', newIds);
                  }}
                  className={cn(
                    spec.color,
                    'px-3 py-1 rounded-full text-sm flex items-center gap-1',
                    editedProject.specializationIds.includes(spec.id) ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  )}
                >
                  <span>{spec.emoji}</span>
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