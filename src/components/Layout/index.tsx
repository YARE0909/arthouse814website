import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Head from "next/head";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-fixed bg-cover bg-no-repeat lg:px-52 gap-5 bg-gradient-to-r from-blue-200 via-teal-300 to-green-200">
      <Head>
        <title>Arthouse 814</title>
      </Head>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full flex-grow flex flex-col items-center justify-center bg-white shadow-2xl rounded-lg mt-6 lg:p-8">
        {children}
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
      <div className="fixed bg-green-500 w-32 rounded-lg bottom-10 right-0 p-2">
        <a className="w-full flex gap-2 items-center" target="_blank" href="https://wa.me/919972658401">
          <FaWhatsapp  className="text-white text-3xl cursor-pointer" />
          <h1 className="text-white font-medium text-xs">Contact Us</h1>
        </a>
      </div>
    </div>
  );
}
