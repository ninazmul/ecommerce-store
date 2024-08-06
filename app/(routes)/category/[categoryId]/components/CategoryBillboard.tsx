import React from "react";
import { Billboard as BillboardType } from "@/types";
import Image from "next/image";
import defaultImage from "/public/mustard flowers.jpg";

interface CategoryBillboardProps {
  data: BillboardType | null; // Allow for the possibility of null data
}

const CategoryBillboard: React.FC<CategoryBillboardProps> = ({ data }) => {
  // Fallback values for image URL and label
  const imageUrl = data?.imageUrl || defaultImage;
  const label = data?.label || "Default Label";

  return (
    <div className="relative w-full h-[180px] md:h-[300px] lg:h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={typeof imageUrl === "string" ? imageUrl : defaultImage}
          alt={label}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
        {/* Black overlay */}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4 text-white text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {label}
        </h2>
      </div>
    </div>
  );
};

export default CategoryBillboard;
