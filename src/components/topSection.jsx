import React from "react";
import NavBar from "./navBar";
import Image from "next/image";

export default function TopSection() {
  return (
    <div className="relative w-full h-[40vh]">
      <Image
        src="images/hero-bg.svg"
        width={1300}
        height={100}
        alt="hero-bg"
        className="absolute transform scale-y-[-1] -z-50"
      />
      <NavBar />
    </div>
  );
}
