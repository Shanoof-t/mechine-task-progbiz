"use client";
import React from "react";
import NavBar from "./navBar";
import Image from "next/image";
import { useMedia } from "react-use";

export default function TopSection() {
  const isMobile = useMedia("(max-width:1024px)", false);
  
  return (
    <div className={`relative w-full ${isMobile ? 'h-[41vh]' : 'h-[40vh]'}`}>
      <Image
        src="images/hero-bg.svg"
        width={isMobile ? 2000 : 1300}
        height={1000}
        alt="hero-bg"
        className="absolute transform scale-y-[-1] -z-50 w-full h-full object-cover"
      />
      <NavBar />
    </div>
  );
}