import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CarouselComponent from "../Home/Carousel";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div>
        {/* Make a navbar */}
        <nav className="flex justify-center items-center py-4 px-6 bg-white shadow-sm rounded-lg relative">
          <div className="w-full flex justify-start lg:justify-center items-center">
            <div className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-green-700" />
              ) : (
                <FaBars className="text-2xl text-green-700" />
              )}
            </div>
            <ul
              className={`flex-col md:flex-row text-sm md:space-x-4 w-full md:flex justify-center items-center md:gap-9 ${
                isMenuOpen
                  ? "absolute top-0 left-0 h-screen bg-white z-10 p-4 flex justify-center items-center"
                  : "hidden md:flex"
              }`}
            >
              <Link
                href="/"
                className="block lg:hidden text-blue-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0 text-4xl"
                onClick={closeMenu}
              >
                ArtHouse 814
              </Link>
              <li className="nav-item">
                <Link
                  href="/"
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/artClasses"
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Art Classes + Curriculum
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/artTherapy"
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Art Therapy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/events"
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Events and Experiences
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/gallery"
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item md:hidden">
                <button
                  className="block text-green-700 hover:text-[#9711A3] transition font-ChelseaMarket duration-300 py-2 md:py-0"
                  onClick={closeMenu}
                >
                  Close Menu
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;
