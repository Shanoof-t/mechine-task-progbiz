"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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

const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMedia("(max-width:1024px)", false);

  const onClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="text-white cursor-pointer">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2 bg-neutral text-white">
          <nav className="flex flex-col gap-y-2 pt-6">
            {menuOptions.map((menu) => (
              <button
                key={menu.path}
                onClick={() => onClick(menu.path)}
                className="w-full text-left px-4 py-2 text-white font-medium rounded-lg transition-colors cursor-pointer"
              >
                {menu.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
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
  );
};

export default function NavBar() {
  return (
    <div className="w-full flex justify-between items-center p-10">
      <Image
        className="hidden lg:flex"
        src="logo/logo.svg"
        width={80}
        height={50}
        alt="logo"
      />
      <Navigations />
      <div className="flex justify-center items-center">
        <Image
          className="lg:w-36 w-32"
          src="images/Link.svg"
          width={0}
          height={0}
          alt="logo"
        />
      </div>
    </div>
  );
}
