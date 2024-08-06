"use client";

import banner from "../public/GHANIGHOR.png";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

export default function CallToAction() {
  return (
    <div className="flex flex-col md:flex-row items-center p-3 border border-lime-600 justify-between rounded-tl-3xl rounded-br-3xl m-4 h-full">
      <div className="p-7 md:w-1/2 flex flex-col gap-3">
        <h2 className="text-3xl font-serif font-semibold">
          শতভাগ বিশুদ্ধ সরিষার তেলের জন্য আমাদের সাথে যোগাযোগ করুন!
        </h2>
        <p className="text-sm text-justify">
          আমাদের পণ্যগুলি আপনাকে একটি স্বাস্থ্যকর এবং সুখী জীবনের পথে এগিয়ে
          নিয়ে যেতে সাহায্য করবে। আজই আমাদের প্রিয় সরিষার তেল, নারকেল তেল, এবং
          কালোজিরা তেল অর্ডার করুন এবং এর প্রাকৃতিক গুণমান ও স্বাস্থ্য উপকারিতা
          উপভোগ করুন। আমাদের তেলগুলি আপনার এবং আপনার পরিবারের জন্য সেরা পছন্দ।
        </p>
        <a
          href="https://wa.me/8801865490908"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center gap-2 justify-center w-full bg-[#00ff00] py-2 px-4 text-white font-bold text-xl rounded-tr-none rounded-xl"
        >
          <BsWhatsapp size={20} />
          Contact Us
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
