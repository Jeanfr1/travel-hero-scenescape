
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  image: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, image, author }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      }}
      onDragEnd={(e: any) => {
        const endX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        if (dragRef.current - endX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={image}
        alt={`Photo of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-gray-200 bg-gray-100 object-cover"
      />
      <span className="text-center text-lg italic text-gray-600">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-primary">{author}</span>
    </motion.div>
  );
}
