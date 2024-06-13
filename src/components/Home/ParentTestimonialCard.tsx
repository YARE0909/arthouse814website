import Image from "next/image";
import React from "react";

const ParentTestimonialCard = ({
  parentName,
  image,
  testimonial,
}: {
  parentName: string;
  image: string;
  testimonial: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-5 w-56">
      <div>
        <Image
          src={image}
          alt="Placeholder"
          className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-full"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center">
          <h1 className="font-bold text-center">{parentName}</h1>
        </div>
        <div>
          <h1 className="text-xs text-center font-medium">{testimonial}</h1>
        </div>
      </div>
    </div>
  );
};

export default ParentTestimonialCard;
