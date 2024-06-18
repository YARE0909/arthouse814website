import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({imageList}: {
  imageList: string[];
}) => {

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
            className="max-h-96 object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
