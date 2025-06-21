"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const brands = [
  "brands/brand-1.svg",
  "brands/brand-2.svg",
  "brands/brand-3.svg",
  "brands/brand-4.svg",
];

export default function AutoCarousel() {
  const wrapperRef = useRef();

  useEffect(() => {
    const totalWidth = wrapperRef.current.scrollWidth / 2;

    gsap.to(wrapperRef.current, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });
  }, []);
  return (
    <div className="relative max-w-[70rem] mx-auto flex flex-col justify-center items-center overflow-hidden ">
      <div>
        <p className="text-background">As seen and loved on:</p>
      </div>
      <div
        className="relative flex justify-center items-center p-12 space-x-24"
        ref={wrapperRef}
      >
        {[...brands, ...brands].map((brand, i) => {
          return (
            <div className="flex-shrink-0 w-32" key={i}>
              <div>
                <Image
                  src={brand}
                  width={100}
                  height={100}
                  alt={brand}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-20 w-1/2 h-40 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(166,166,166,0.2),_transparent_60%)]"></div>

      <div className="absolute bottom-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-background/30 to-transparent"></div>
    </div>
  );
}
