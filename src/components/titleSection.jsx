import Image from "next/image";
import React from "react";
import Button from "./button";
import { ChevronRight } from "lucide-react";

function Rating() {
  return (
    <div className="bg-neutral flex justify-evenly space-x-2 px-4 py-2 border-1 rounded-full border-background/30 shadow ">
      <div>
        <p className="text-background">5.0</p>
      </div>
      <Image src="images/stars.svg" width={80} height={10} alt="stars" />
      <div>
        <p className="text-background">11 reviews</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="text-center max-w-3/4 space-y-4">
      <h1 className="text-white font-medium leading-20">
        Partner with a Full-Service Design Team for All Your Creative Needs
      </h1>
      <h6 className="text-white font-medium">
        Skip the hassle of finding the perfect full-time designer or studio
      </h6>
    </div>
  );
}

export default function TitleSection() {
  return (
    <div className=" w-full h-[70vh] flex flex-col justify-evenly items-center">
      <Rating />
      <Title />
      <Button
        label="Connect-us"
        classNames="text-neutral font-medium bg-primary px-6 py-2 "
        icon={<ChevronRight size={20} />}
      />
    </div>
  );
}
