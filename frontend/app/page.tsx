import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import StatsSection from "@/components/StatsCounter";
import { ThreeDCardDemo } from "@/components/3DCard";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen pt-8 px-8">
      <main className="flex flex-col row-start-2">
        <div className="relative z-10">
          <div className="flex justify-between">
            <div className="text-6xl font-extrabold mt-16">
              <p>Turn ideas into teams.</p>
              <span className="bg-gradient-to-r from-black via-green-500 to-black inline-block text-transparent bg-clip-text">
                Instantly.
              </span>

              <div className="text-xl font-extralight">
                A visual network of open projects and people ready to build.
              </div>

              {/* Stats */}
              <div className="mt-16 pointer-events-auto">
                <StatsSection />
              </div>
            </div>

            <ThreeDCardDemo />
          </div>
        </div>
      </main>
    </div>
  );
}
