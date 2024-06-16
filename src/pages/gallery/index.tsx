import React, { useRef, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { GalleryImage } from "@/Data/Gallery";
import { Gallery } from "react-grid-gallery";

const Index = () => {

  return (
    <Layout>
      <div className="p-4 w-full flex flex-col gap-5">
        <h1 className="text-2xl lg:text-4xl font-bold">Gallery</h1>
        <div className="w-full">
          <video
            width="100%"
            autoPlay
            loop
            muted
            className="w-full h-96 object-cover"
          >
            <source src="assets/Gallery/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full">
          <Gallery images={GalleryImage} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
