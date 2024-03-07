"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menu } from "../data/menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useProvideContext } from "../context/Context";

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
  }, [display]);
  const context = useProvideContext();
  if (!context) {
    return <></>;
  }
  const { setMenubar } = context;
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
                  src="/photo/abstract-letter.png"
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
                <div
                  className={`p-1 md:hidden ${
                    display ? "text-black" : "text-white"
                  }`}
                  onClick={() => {
                    setMenubar(true);
                  }}
                >
                  <MenuIcon className="text-5xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
