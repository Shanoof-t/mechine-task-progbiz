"use client";
import Image from "next/image";
import React from "react";
import Button from "./button";
import { ChevronRight } from "lucide-react";
import { useMedia } from "react-use";

function Rating() {
  return (
    <div className="bg-neutral flex justify-evenly items-center space-x-2 px-4 py-2 border border-background/30 rounded-full shadow">
      <p className="text-background text-sm lg:text-base">5.0</p>
      <Image src="/images/stars.svg" width={80} height={10} alt="stars" />
      <p className="text-background text-sm lg:text-base">11 reviews</p>
    </div>
  );
}

function Title() {
  const isMobile = useMedia("(max-width:1024px)", false);

  return (
    <div className="text-center max-w-3/4 space-y-4">
      {isMobile ? (
        <h6 className="text-white  text-3xl lg:text-4xl font-semibold leading-snug ">
          Partner with a Full-Service Design Team for All Your Creative Needs
        </h6>
      ) : (
        <h1 className="text-white font-medium leading-20">
          Partner with a Full-Service Design Team for All Your Creative Needs
        </h1>
      )}

      <h6 className="text-white text-base lg:text-lg font-medium">
        Skip the hassle of finding the perfect full-time designer or studio
      </h6>
    </div>
  );
}

export default function TitleSection() {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center space-y-6 lg:space-y-10 px-4 lg:px-0">
      <Rating />
      <Title />
      <Button
        label="Connect-us"
        classNames="text-neutral font-medium bg-primary px-6 py-2"
        icon={<ChevronRight size={20} />}
      />
    </div>
  );
}
