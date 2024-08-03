"use client";

import banner from "../public/GHANIGHOR.png";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

export default function CallToAction() {
  return (
    <div className="flex flex-col md:flex-row items-center p-3 border border-lime-600 justify-between rounded-tl-3xl rounded-br-3xl m-4">
      <div className="p-7 md:w-1/2 flex flex-col gap-3">
        <h2 className="text-3xl font-serif font-semibold">
          Contact Us for Pure Mustard Oil!
        </h2>
        <p className="text-sm text-justify">
          Discover the purity and richness of our mustard oil. Perfect for
          cooking and health benefits. Reach out to us to get your supply of
          pure mustard oil today!
        </p>
        <a
          href="https://wa.me/8801865490908"
          target="_blank"
                  rel="noopener noreferrer" 
                  className="button flex items-center gap-2 justify-center w-full bg-[#00ff00] py-2 px-4 text-white font-bold text-xl rounded-tr-none rounded-xl"
        >
          <BsWhatsapp size={20} />
          Contact Us on WhatsApp
        </a>
      </div>
      <div className="p-7 flex-1">
        <Image
          src={banner}
          alt="Banner"
          width={400}
          height={400}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
