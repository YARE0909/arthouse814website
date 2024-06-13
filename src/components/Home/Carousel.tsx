import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const imageList = [
    "/assets/Home/Carousel/1.jpg",
    "/assets/Home/Carousel/2.jpg",
    "/assets/Home/Carousel/3.jpg",
    "/assets/Home/Carousel/4.jpg",
    "/assets/Home/Carousel/5.jpg",
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {imageList.map((image, index) => (
        <div key={index}>
          <Image
            width={400}
            height={400}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
