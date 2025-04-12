import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 ">
      <main className="flex flex-col row-start-2 items-center">
        
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundGradientAnimation />
        </div>
        <div className="relative z-10">
          <Link href={"/activity"}>
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest 
        uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 
        transition duration-200">Let's LiveActive!</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
