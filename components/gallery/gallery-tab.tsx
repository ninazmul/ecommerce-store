import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt={`Thumbnail ${image.id}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 10vw, 5vw"
              loading="lazy"
            />
          </span>
          <span
            className={clsx(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-[#009900]" : "ring-transparent"
            )}
          />
        </>
      )}
    </Tab>
  );
};

export default GalleryTab;
