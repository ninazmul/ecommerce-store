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
    <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="relative w-full h-0 pb-[50%] md:pb-[41.67%]">
        <Image
          src={typeof imageUrl === "string" ? imageUrl : defaultImage}
          alt={label}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-black text-white rounded-b-xl">
        <h2 className="text-lg font-semibold">{label}</h2>
      </div>
    </div>
  );
};

export default CategoryBillboard;
