"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white/25 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white"
        >
          EcoTrack – Your Personal Carbon Footprint Monitor
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          EcoTrack is an innovative technology startup that leverages wearable
          devices and advanced data analytics to help individuals monitor and
          reduce their carbon footprints. I'm looking for new devs!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/ecotrack.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
