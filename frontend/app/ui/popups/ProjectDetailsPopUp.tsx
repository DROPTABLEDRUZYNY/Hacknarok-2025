"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

export interface Skill {
    id: number;
    name: string;
  }
  
export interface SpecializationDetail {
    id: number;
    name: string;
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
}

export interface Owner {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}

export interface Project {
    id: number;
    owner: Owner;
    positions: Position[];
    name: string;
    description: string;
    image: string | null;
    created_at: string;
    is_active: boolean;
    location: string;
}

type Props = {
    project: Project;
}
  

export function ProjectDetailsPopUp({ project }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(project);

  const images = [
    "/projects_gallery/p1p1.png",
    "/projects_gallery/p1p2.png",
    "/projects_gallery/p1p3.png",
  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          Open Image Gallery
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-white rounded-lg overflow-hidden flex flex-col">
        <DialogHeader className="sr-only">
        </DialogHeader>
        
        {/* Основной контейнер с прокруткой */}
        <div className="flex-1 overflow-y-auto">
          {/* Галерея изображений */}
          <div className="relative h-[60vh] min-h-[400px] mt-6">
            {/* Контейнер галереи */}
            <div className="flex h-full overflow-hidden relative">
              {/* Предыдущее изображение (слева) */}
              <div 
                className="absolute left-0 top-0 w-1/4 h-full flex items-center justify-start pr-2 z-10 cursor-pointer"
              >
                {currentIndex > 0 && (
                  <img 
                    src={images[(currentIndex - 1 + images.length) % images.length]} 
                    alt="Previous image"
                    className="h-3/4 object-cover rounded-l-lg opacity-70 ml-4"
                  />
                )}
              </div>
              
              {/* Текущее изображение (центр) */}
              <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
                <img 
                  src={images[currentIndex]} 
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="object-contain max-h-full max-w-full z-20"
                />
              </div>
              
              {/* Следующее изображение (справа) */}
              <div 
                className="absolute right-0 top-0 w-1/4 h-full flex items-center justify-end pl-2 z-10 cursor-pointer"
              >
                {currentIndex < images.length - 1 && (
                  <img 
                    src={images[(currentIndex + 1) % images.length]} 
                    alt="Next image"
                    className="h-3/4 object-cover rounded-r-lg opacity-70 mr-4"
                  />
                )}
              </div>
            </div>
            
            {/* Навигационные кнопки */}
            <Button 
              variant="ghost" 
              size="lg"
              onClick={prevImage}
              disabled={currentIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full z-30"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full z-30"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Индикатор текущего изображения */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-30">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Текстовый контент */}
          <div className="flex flex-col mx-8 my-8 pb-8">
            <div className="mb-6">
              <p className="font-bold text-3xl">USOS - schools schedule management</p>
              
              <p className="mt-4 text-gray-700">
                {project.description}
              </p>
            </div>

            {/* Дополнительные секции (пример) */}
            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-3">Project Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responsive design for all devices</li>
                <li>Interactive schedule management</li>
                <li>Real-time updates</li>
              </ul>
            </div>

            
            <div className="mt-6 flex flex-col">
                <h3 className="font-semibold text-xl mb-3">Technologies Used</h3>
                <div>   
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <Button variant="link" className="flex items-center gap-2">
                    View details
                    <ArrowUpRight className="w-4 h-4" />
                </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}