import { Project } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectSelectorProps {
  projects?: any;
  selectedProjectId: number;
  onProjectChange: (projectId: number) => void;
}

export default function ProjectSelector({
  projects,
  selectedProjectId,
  onProjectChange,
}: ProjectSelectorProps) {
  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-[50] w-64">
      <Select
        value={selectedProjectId.toString()}
        onValueChange={(value) => onProjectChange(parseInt(value))}
      >
        <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-black">
          <SelectValue placeholder="Choose project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project: any) => (
            <SelectItem key={project.id} value={project.id.toString()}>
              {project.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
