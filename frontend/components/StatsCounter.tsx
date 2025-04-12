"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({
  initialValue,
  description,
}: {
  initialValue: number;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [value, setValue] = useState(initialValue);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Initial animation when component comes into view
  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2 });
    }
  }, [count, value, isInView]);

  // Random increment every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random increment between 1 and 3
      const increment = Math.floor(Math.random() * 3) + 1;
      setValue((prev) => prev + increment);
      animate(count, value + increment, { duration: 0.5 });
    }, Math.random() * 5000 + 2000);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col p-6 items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span className="text-7xl font-bold bg-gradient-to-r from-black via-green-500 to-black inline-block text-transparent bg-clip-text">
        {rounded}
      </motion.span>
      <span className="font-extralightmt-2 text-center w-[150px] text-sm">
        {description}
      </span>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row gap-4">
          <Counter
            initialValue={42}
            description="projects looking for members"
          />
          <Counter initialValue={156} description="active users this week" />
          <Counter initialValue={28} description="teams formed" />
        </div>
      </div>
    </div>
  );
}
