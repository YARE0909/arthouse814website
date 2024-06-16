import React from "react";
import Layout from "../../components/Layout";
import { GalleryImage } from "@/Data/Gallery";
import { Gallery } from "react-grid-gallery";
import Image from "next/image";

const Index = () => {
  return (
    <Layout>
      <div className="p-4 w-full flex flex-col gap-5">
        <h1 className="text-2xl lg:text-4xl font-bold">Gallery</h1>
        <div className="w-full">
          <Image //TODO: Replace with video
            src="/assets/Gallery/6.jpg"
            alt="Gallery"
            width={1920}
            height={1080}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="w-full">
          <Gallery images={GalleryImage} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
