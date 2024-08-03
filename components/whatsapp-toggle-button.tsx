"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppToggleButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web

    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=8801865490908`);
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open("https://web.whatsapp.com/send?phone=8801865490908", "_blank");
    }
  };

  return (
    <>
      <div
        className="bg-[#00ff00] w-min p-2 rounded-full fixed 
          bottom-10 right-4 cursor-pointer md:right-8"
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </div>
    </>
  );
}

export default WhatsAppToggleButton;
