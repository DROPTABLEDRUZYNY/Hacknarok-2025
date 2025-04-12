"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GraphComponent from "@/app/ui/network/network";

export default function NetworkPage() {
  return (
    <div className="w-full h-full bg-transparent">
      <div className="w-full h-full backdrop-blur">
        <h1 className=" text-3xl font-bold text-center mb-6 text-black absolute top-20 z-[50] left-1/2 transform -translate-x-1/2">
          Network
        </h1>

        <GraphComponent />
      </div>
    </div>
  );
}
