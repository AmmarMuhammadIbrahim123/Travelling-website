"use client";
import React, { useEffect, useState } from "react";
import { TbAirBalloon } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import { navlinks } from "../../Constant/Constant";

const Nav = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[1000] h-[12vh] transition-all duration-200 ${
        navBg ? "bg-blue-950 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-[90%] xl:w-[80%] mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-extrabold">
            TRIPI
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navlinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="text-white hover:underline hover:decoration-amber-400 transition duration-200 font-medium cursor-pointer">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Book Button + Burger Menu */}
        <div className="flex items-center space-x-4">
          <button
            className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200
          transition-all duration-200 rounded-lg"
          >
            Book Now
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
