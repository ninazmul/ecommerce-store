import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="relative w-full h-0 pb-[50%] md:pb-[41.67%]">
        {" "}
        {/* Adjust aspect ratio as needed */}
        <Image
          src={data?.imageUrl}
          alt={data?.label}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Billboard;
