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
  userLevel: number;
  onSubmit: (message: string) => void;
}

export default function ApplyProjectPopup({
  isOpen,
  onClose,
  projectTitle,
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


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply to {projectTitle}</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>

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
      </DialogContent>
    </Dialog>
  );
} 