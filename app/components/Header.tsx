"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menu } from "../data/menu";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`w-full fixed z-50 ${display ? "bg-white" : ""}`}>
        <div className="flex justify-center py-5">
          <div className="containerbox w-full">
            <div className="flex justify-between  items-center">
              <div>
                <Image
                  alt="logo"
                  height={100}
                  width={100}
                  src="/photo/zysk.png"
                />
              </div>
              <div className="h-full flex items-center">
                <ul className="h-full hidden md:block">
                  <li>
                    {menu.map((element) => {
                      const { name, href } = element;
                      return (
                        <>
                          <Link
                            className={`font-medium py-2 px-5 text-white ${
                              display ? "text-black" : "text-white"
                            }`}
                            href={href}
                          >
                            {name}
                          </Link>
                        </>
                      );
                    })}
                  </li>
                </ul>
                <MenuIcon
                  className={`p-1 text-5xl md:hidden ${
                    display ? "text-black" : "text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
