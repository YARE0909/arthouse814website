import React from "react";
import Layout from "../../components/Layout";
import { GalleryImage } from "@/Data/Gallery";
import { Gallery } from "react-grid-gallery";

const Index = () => {
  return (
    <Layout>
      <div className="p-4 w-full flex flex-col gap-10">
        <h1 className="text-2xl lg:text-4xl font-bold">Gallery</h1>
        <div className="w-full">
            <Gallery images={GalleryImage} />
          </div>
      </div>
    </Layout>
  );
};

export default Index;
