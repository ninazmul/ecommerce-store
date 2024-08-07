import React from "react";
import { Billboard as BillboardType } from "@/types";
import Image from "next/image";
import defaultImage from "/public/mustard flowers.jpg";

interface CategoryBillboardProps {
  data: BillboardType | null; 
}

const CategoryBillboard: React.FC<CategoryBillboardProps> = ({ data }) => {

  const imageUrl = data?.imageUrl || defaultImage.src;
  const label = data?.label || "GhaniGhor";

  return (
    <div className="relative w-full h-[180px] md:h-[300px] lg:h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={label}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-75" />{" "}
        {/* Black overlay */}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4 text-white text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">
          {label}
        </h2>
      </div>
    </div>
  );
};

export default CategoryBillboard;
