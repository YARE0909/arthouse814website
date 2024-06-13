import React from "react";
import Layout from "../../components/Layout";
import { Gallery } from "react-grid-gallery";
import {
  birthdayCelebrationsPhotos,
  competitionsPhotos,
  exhibitionPhotos,
  natureCampPhotos,
} from "@/Data/Events";

const Index = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-12 justify-center items-center p-8 bg-gradient-to-r from-purple-50 to-purple-100 min-h-screen rounded-lg shadow-lg">
        <div className="w-full flex flex-col gap-3 justify-center items-center text-center">
          <h1 className="font-bold text-2xl md:text-5xl text-purple-900">
            Real Life Outdoor Practical Exposure & Art Aesthetics
          </h1>
          <p className="md:text-xl text-purple-700 max-w-3xl font-semibold">
            We believe in providing a space where students feel happy,
            connected, loved, and bond with others besides loving the beautiful
            subject of art.
          </p>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Nature Camps
          </h2>
          <div className="w-full">
            <Gallery images={natureCampPhotos} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Exhibition Visits
          </h2>
          <div className="w-full">
            <Gallery images={exhibitionPhotos} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Birthday Celebrations
          </h2>
          <div className="w-full">
            <Gallery images={birthdayCelebrationsPhotos} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Competitions
          </h2>
          <div className="w-full">
            <Gallery images={competitionsPhotos} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
