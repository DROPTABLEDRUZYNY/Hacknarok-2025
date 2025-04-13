"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GraphComponent from "@/app/ui/network/network";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function NetworkPage() {
  // For now, we'll use a hardcoded project ID. In a real app, this would come from the URL or state
  const projectId = 1;

  return (
    <div className="w-full h-full bg-transparent">
      <div className="w-full h-full absolute top-0 left-0 z-[-1]">
        <BackgroundGradientAnimation />
      </div>
      <div className="w-full h-full backdrop-blur">
        <h1 className="text-3xl font-bold text-center mb-6 text-black absolute top-20 z-[50] left-1/2 transform -translate-x-1/2">
          Network
        </h1>

        <GraphComponent projectId={projectId} />
      </div>
    </div>
  );
}
