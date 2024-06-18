import React from "react";

const ParentTestimonialCard = ({
  parentName,
  testimonial,
}: {
  parentName: string;
  testimonial: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-5 w-64 shadow-xl rounded-md p-4">
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
