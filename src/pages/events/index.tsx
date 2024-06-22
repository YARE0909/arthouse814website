import React from "react";
import Layout from "../../components/Layout";
import { Gallery } from "react-grid-gallery";
import {
  birthdayCelebrationsPhotos,
  competitionsPhotos,
  exhibitionPhotos,
  natureCampPhotos,
} from "@/Data/Events";
import Image from "next/image";

const Index = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-8 justify-center items-center p-8 bg-gradient-to-r from-purple-50 to-purple-100 min-h-screen rounded-lg shadow-lg">
        <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="font-bold text-3xl text-purple-900">
            Outdoor Activities
          </h1>
          <p className="text-purple-700 max-w-3xl font-semibold">
            We believe in providing a space where students feel happy,
            connected, loved, and bond with others besides loving the beautiful
            subject of art.
          </p>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-green-500 mb-4">
            Nature Camp
          </h2>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {natureCampPhotos.map((photo, index) => {
              return (
                <div key={index}>
                  <Image
                    width={photo.width}
                    height={photo.height}
                    src={photo.src}
                    alt={photo.src}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Gallery Visit (NGMA)
          </h2>
          <div className="w-full">
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
              {exhibitionPhotos.map((photo, index) => {
                return (
                  <div key={index}>
                    <Image
                      width={photo.width}
                      height={photo.height}
                      src={photo.src}
                      alt={photo.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Birthday Celebrations
          </h2>
          <div className="w-full">
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
              {birthdayCelebrationsPhotos.map((photo, index) => {
                return (
                  <div key={index}>
                    <Image
                      width={photo.width}
                      height={photo.height}
                      src={photo.src}
                      alt={photo.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl text-purple-800 mb-4">
            Competitions
          </h2>
          <div className="w-full">
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
              {competitionsPhotos.map((photo, index) => {
                return (
                  <div key={index}>
                    <Image
                      width={photo.width}
                      height={photo.height}
                      src={photo.src}
                      alt={photo.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
