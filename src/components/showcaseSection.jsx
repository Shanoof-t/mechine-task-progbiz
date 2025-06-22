"use client";
import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <div className="max-w-[70rem] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-6 place-content-center p-4">
      <div className="lg:col-span-2 bg-neutral rounded-3xl border border-background/30">
        <video
          className="w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
        >
          <source src="projects/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="lg:col-span-3 bg-neutral rounded-3xl border border-background/30 flex flex-col lg:flex-row justify-center items-center px-6 py-6 space-y-4 lg:space-y-0 lg:space-x-4 text-center">
        <Image
          src="/images/left-leaf.svg"
          width={30}
          height={10}
          alt="left-leaf"
          className="hidden lg:flex"
        />
        <div className="space-y-2">
          <p className="text-white text-sm lg:text-base">
            An absolute professional who consistently delivers exceptional work,
            even under the most demanding deadlines. I appreciated the
            insightful feedback and innovative ideas introduced throughout the
            design process, which greatly enhanced the final product.
          </p>
          <p className="text-background text-sm">
            Murshid Pulkkada – Founder @Progbiz
          </p>
        </div>
        <Image
          src="/images/right-leaf.svg"
          width={30}
          height={10}
          alt="right-leaf"
          className="hidden lg:flex"
        />
      </div>

      <div className="lg:col-span-5 bg-neutral rounded-3xl border border-background/30 grid grid-cols-1 lg:grid-cols-2 p-6 gap-6">
        <div className="leading-loose">
          <h3 className="text-white text-xl lg:text-2xl font-semibold">
            Your dedicated in-house design team
          </h3>
        </div>

        <div className="flex flex-col space-y-6">
          <p className="text-white text-sm lg:text-base">
            We are a global collective of diverse designers and developers,
            partnering with brands of all scales. What distinguishes us is our
            dedication to crafting memorable, user-friendly, and captivating
            experiences — it's what we excel at. The projects we deliver combine
            creative vision with practical execution, resulting in solutions
            that are both distinctive and impactful.
          </p>
          <div className="flex justify-between items-center">
            <div className="border-s pl-4 border-background/30">
              <p className="text-white text-sm">Murshid</p>
              <p className="text-background text-xs">Founder and CEO</p>
            </div>
            <Image
              className="transform rotate-12"
              src="/images/right-leaf.svg"
              width={30}
              height={10}
              alt="right-leaf"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
