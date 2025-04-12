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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface ApplyProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  levelRequirement: number;
  userLevel: number;
  onSubmit: (message: string) => void;
}

export default function ApplyProjectPopup({
  isOpen,
  onClose,
  projectTitle,
  levelRequirement,
  userLevel,
  onSubmit,
}: ApplyProjectPopupProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
    onClose();
  };

  const canApply = userLevel >= levelRequirement;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply to {projectTitle}</DialogTitle>
          <DialogDescription>
            {!canApply 
              ? `You need to be at least level ${levelRequirement} to apply for this project. Your current level is ${userLevel}.`
              : "Tell us why you want to join this project and what you can bring to the team."}
          </DialogDescription>
        </DialogHeader>

        {canApply ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Application Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Why do you want to join this project?"
                required
                className="min-h-[100px]"
              />
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Minimum Level</span>
                <span className="font-medium">{levelRequirement}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Your Level</span>
                <span className="font-medium">{userLevel}</span>
              </div>
              <div className="flex items-center justify-between text-green-600">
                <span className="text-sm">✓ You meet the level requirement!</span>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Submit Application</Button>
            </DialogFooter>
          </form>
        ) : (
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
} 