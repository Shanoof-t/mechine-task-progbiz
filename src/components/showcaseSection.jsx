"use client";
import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <div className="max-w-[70rem] mx-auto min-h-[100vh]  grid grid-cols-5 grid-rows-2 gap-6 place-content-center">
      <div className="col-span-2 bg-neutral rounded-3xl border-1 border-background/30">
        <video
          className="w-full h-full object-cover rounded-3xl"
          autoPlay={true}
          loop
        >
          <source src="projects/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-span-3 bg-neutral rounded-3xl border-1 border-background/30 flex justify-center items-center px-6">
        <Image
          src="images/left-leaf.svg"
          width={30}
          height={10}
          alt="left-leaf.svg"
        />
        <div className="text-center space-y-2">
          <p className="text-white">
            An absolute professional who consistently delivers exceptional work,
            even under the most demanding deadlines. I appreciated the
            insightful feedback and innovative ideas introduced throughout the
            design process, which greatly enhanced the final product..
          </p>
          <p className="text-background">Murshid Pulkkada Founder @Progbiz</p>
        </div>
        <Image
          src="images/right-leaf.svg"
          width={30}
          height={10}
          alt="left-leaf.svg"
        />
      </div>
      <div className="col-span-5 bg-neutral rounded-3xl border-1 border-background/30 grid grid-cols-2 grid-rows-1 p-10">
        <div className="w-2/3 leading-12">
          <h3 className="text-white">Your dedicated in-house design team</h3>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="">
            <p className="text-white ">
              We are a global collective of diverse designers and developers,
              partnering with brands of all scales. What distinguishes us is our
              dedication to crafting memorable, user-friendly, and captivating
              experiences — it's what we excel at. The projects we deliver
              combine creative vision with practical execution, resulting in
              solutions that are both distinctive and impactful.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="border-s p-3 border-background/30">
              <p className="text-white">Murshid</p>
              <p className="text-background">Founder and CEO</p>
            </div>
            <Image
              className="transform rotate-12"
              src="images/right-leaf.svg"
              width={30}
              height={10}
              alt="left-leaf.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
