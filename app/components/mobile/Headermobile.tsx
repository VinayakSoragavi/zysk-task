"use client";
import React from "react";
import { useProvideContext } from "@/app/context/Context";
import Link from "next/link";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CancelIcon from "@mui/icons-material/Cancel";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { menu } from "@/app/data/menu";
import Image from "next/image";

const Headermobile: React.FC = () => {
  const context = useProvideContext();
  if (!context) {
    return <></>;
  }
  const { menubar, setMenubar } = context;

  return (
    <section>
      <div
        style={{ transition: "0.4s" }}
        className={`fixed top-0 z-[500] h-full scroll-container overflow-y-scroll scrollbar-hidden ${
          menubar ? "w-full" : "w-0"
        }`}
      >
        <div
          style={{ backgroundColor: "#fafafa" }}
          className="w-[270px] h-full border-r-2"
        >
          <div className="flex justify-start px-3 pt-5">
            <Image
              alt="logo"
              height={100}
              width={100}
              src="/photo/abstract-letter.png"
            />
          </div>
          <div style={{ backgroundColor: "#fafafa" }} className="w-full">
            <div className="pt-5 px-3 w-full">
              <h5 className="text-lg font-medium text-green-600">Dashbord</h5>
              {menu.map((elem, i) => (
                <Link
                  key={i}
                  onClick={() => {
                    setMenubar(false);
                  }}
                  href={elem.href}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 relative flex "
                >
                  <FileOpenIcon className="text-xl mr-1" />
                  {elem.name}
                </Link>
              ))}
            </div>
            <div
              style={{ backgroundColor: "#fafafa" }}
              className="py-3 px-3 w-full"
            >
              <h5 className="text-lg font-medium text-green-600">
                Contact Info
              </h5>
              <p>
                Check the top-level render call using Check the top-level render
                call using Check the top-level render call using
              </p>
              <a
                href="/"
                className=" flex pt-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 relative"
              >
                <CallIcon className="text-xl mr-1" />
                99456 86999
              </a>
              <a className=" flex pt-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 relative text-sm">
                <EmailIcon className="text-xl mr-1" />
                asdfghjk@gmail.com
              </a>
            </div>
            <div
              style={{ backgroundColor: "#fafafa" }}
              className="w-full flex justify-center pb-5"
            >
              <div className="flex">
                <FacebookIcon className="text-3xl p-1" />
                <YouTubeIcon className="text-3xl p-1" />
                <GoogleIcon className="text-3xl p-1" />
                <InstagramIcon className="text-3xl p-1" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute z-40 top-2 right-2"
          onClick={() => {
            setMenubar(false);
          }}
        >
          <CancelIcon style={{ color: "#3d7cc9" }} className="text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default Headermobile;
