"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const menuOptions = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Portfolio",
    path: "/",
  },
  {
    label: "Benifits",
    path: "/",
  },
  {
    label: "Services",
    path: "/",
  },
  {
    label: "Pricing",
    path: "/",
  },
  {
    label: "FAQ",
    path: "/",
  },
];

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between items-center p-10">
      <Image
        className=""
        src="logo/logo.svg"
        width={80}
        height={50}
        alt="logo"
      />
      <div className=" text-white space-x-8">
        {menuOptions.map(({ label, path }) => {
          return (
            <button
              key={label}
              onClick={() => {
                router.push(path);
              }}
            >
              <p>{label}</p>
            </button>
          );
        })}
      </div>
      <div className="">
        <Image
          className=""
          src="images/Link.svg"
          width={150}
          height={100}
          alt="logo"
        />
      </div>
    </div>
  );
}
