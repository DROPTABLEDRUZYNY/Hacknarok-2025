'use client';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ initialValue, description }: { initialValue: number; description: string }) => {
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
      setValue(prev => prev + increment);
      animate(count, value + increment, { duration: 0.5 });
    }, 5000);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text">
        {rounded}
      </motion.span>
      <span className="text-gray-600 mt-2 text-center">{description}</span>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter 
            initialValue={42} 
            description="Projects looking for members" 
          />
          <Counter 
            initialValue={156} 
            description="Active users this week" 
          />
          <Counter 
            initialValue={28} 
            description="Teams formed" 
          />
        </div>
      </div>
    </div>
  );
} 