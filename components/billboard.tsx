"use client"; // Add this line at the top of the file

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Billboard as BillboardType } from "@/types";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


interface BillboardProps {
  billboards: BillboardType[];
}

const Billboard: React.FC<BillboardProps> = ({ billboards = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ensure billboards is defined and use default empty array if not
  const displayedBillboards = billboards.slice(0, 5);

  const nextSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % displayedBillboards.length
    );
  }, [displayedBillboards.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + displayedBillboards.length) %
        displayedBillboards.length
    );
  }, [displayedBillboards.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2 w-full h-[150px] md:h-[290px] lg:h-[480px] overflow-hidden">
      <div className="col-span-2 relative w-full h-full">
        {displayedBillboards.length > 0 && (
          <div className="relative w-full h-0 pb-[56.25%]">
            <Image
              src={displayedBillboards[currentSlide].imageUrl}
              alt={displayedBillboards[currentSlide].label}
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full rounded-lg rounded-l-none"
            />
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 md:p-4 lg:p-8 text-2xl z-10 opacity-0 hover:opacity-50 rounded-2xl rounded-l-none transition-opacity"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 md:p-4 lg:p-8 text-2xl z-10 opacity-0 hover:opacity-50 rounded-2xl rounded-r-none transition-opacity"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
      {/* Thumbnail images section */}
      <div className="flex flex-wrap gap-1 md:gap-2">
        {displayedBillboards
          .filter((_, index) => index !== currentSlide)
          .map((billboard) => (
            <div key={billboard.id} className="relative w-full h-0 pb-[56.25%]">
              <Image
                src={billboard.imageUrl}
                alt={billboard.label}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full rounded-lg rounded-r-none"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Billboard;
