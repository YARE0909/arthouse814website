import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

const Index = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-fixed bg-cover bg-no-repeat lg:px-52 gap-5 bg-gradient-to-r from-blue-200 via-teal-300 to-green-200">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full h-full flex-1 flex justify-center items-center">
        <Image
          src="/assets/logo.png"
          alt="Arthouse 814 Logo"
          width={200}
          height={200}
          className=""
        />
      </div>
      <div className="w-full h-full flex-1 flex justify-center items-center">
        <Footer />
      </div>
      <div className="fixed bg-green-500 w-32 rounded-lg bottom-10 right-0 p-2">
        <a
          className="w-full flex gap-2 items-center"
          target="_blank"
          href="https://wa.me/919972658401"
        >
          <FaWhatsapp className="text-white text-3xl cursor-pointer" />
          <h1 className="text-white font-medium text-xs">Contact Us</h1>
        </a>
      </div>
    </div>
  );
};

export default Index;
