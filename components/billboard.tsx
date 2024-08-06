"use client";

import React, { useState } from "react";
import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  billboards: BillboardType[];
}

const Billboard: React.FC<BillboardProps> = ({ billboards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? billboards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === billboards.length - 1 ? 0 : prev + 1));
  };

  if (billboards.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {billboards.map((billboard, index) => (
          <div
            key={billboard.id}
            className="relative flex-shrink-0 w-full h-[180px] md:h-[300px] lg:h-[500px]"
          >
            <Image
              src={billboard.imageUrl}
              alt={billboard.label}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-full hover:bg-white/70 dark:hover:bg-gray-800/70 opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-full hover:bg-white/70 dark:hover:bg-gray-800/70 opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {billboards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Billboard;
