import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import StatsSection from "@/components/StatsCounter";
import { ThreeDCardDemo } from "@/components/3DCard";
import { FolderGit2, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Hacknarok</h1>
        <p className="text-xl text-gray-600 mb-12">
          Join exciting projects, complete quests, and level up your skills in a collaborative environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/projects">
            <Button className="w-full h-48 flex flex-col items-center justify-center gap-4 bg-white hover:bg-gray-50 border-2 border-gray-200">
              <FolderGit2 className="h-12 w-12 text-blue-500" />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <p className="text-gray-600">Browse and join exciting projects</p>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </Button>
          </Link>

          <Link href="/network">
            <Button className="w-full h-48 flex flex-col items-center justify-center gap-4 bg-white hover:bg-gray-50 border-2 border-gray-200">
              <Users className="h-12 w-12 text-green-500" />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Network</h2>
                <p className="text-gray-600">Connect with other developers</p>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
