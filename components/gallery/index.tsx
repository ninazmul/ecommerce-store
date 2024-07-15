"use client";

import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length, isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Tab.Group
      as="div"
      className="flex flex-col-reverse"
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <div className="mx-auto mt-6 w-full max-w-2xl fblock lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels
        className="aspect-square w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={`Image ${image.id}`}
                className="object-cover object-center"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
