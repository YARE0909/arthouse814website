import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-fixed bg-cover bg-no-repeat lg:px-52 gap-5 bg-gradient-to-r from-blue-200 via-teal-300 to-green-200">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full flex-grow flex flex-col items-center justify-center bg-white shadow-2xl rounded-lg mt-6 p-8">
        {children}
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
