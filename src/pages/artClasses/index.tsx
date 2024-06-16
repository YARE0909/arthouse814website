import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

const Index = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-8 justify-center items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen rounded-lg shadow-lg">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <div className="text-center flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-blue-900">
              “There&apos;s an artist in every child”
            </h1>
            <p className="font-semibold text-blue-900">
              Every individual at ArtHouse814 is taught how to think, not what
              to think.
            </p>
          </div>

          {/* Age Group Cards */}
          <AgeGroupCard
            id="fiveToSeven"
            title="5 - 7 Years"
            description={[
              "Learning fundamentals",
              "Playing with colours, exploring colour mixing and creative art using different mediums like oil pastels, colour pencils, soft pastels, watercolours and poster paints.",
              "Hand Grip",
              "Concentration",
              "Hand and eye coordination",
              "Collages",
              "Natural Clay",
              "Finger painting",
              "Texture making",
              "Pictorial Storytelling",
              "Group activities",
            ]}
            imageSrc="/assets/Home/About/1.jpg"
          />

          <AgeGroupCard
            id="eightToTen"
            title="8 - 10 Years"
            description={[
              "Drawing and shading (pencils, oil pastels and soft pastels)",
              "Painting (watercolours and poster colours)",
              "Creative thinking and visualisation",
              "Natural Clay",
              "Collage",
              "Pictorial Storytelling",
              "Brain stimulation activities (situation based, alphabets)",
              "Theme based art",
            ]}
            imageSrc="/assets/Home/About/2.jpg"
          />

          <AgeGroupCard
            id="elevenToFifteen"
            title="11 - 15 Years"
            description={[
              "Drawing and shading (pencils, pen, charcoal, oil pastels and soft pastels)",
              "Painting (watercolours, poster colours, acrylics and oil painting)",
              "Colour Theory",
              "Elements of art and design",
              "Creative thinking and visualisation",
              "Composition",
              "Clay Modelling",
              "Mixed Media",
              "Conceptual Art",
              "Study of different art styles and development of their own style",
            ]}
            imageSrc="/assets/Home/About/3.jpg"
          />

          <AgeGroupCard
            id="adults"
            title="Adults (16+)"
            description={[
              "Fundamentals of Art",
              "Drawing and shading (pencils, pen, charcoal, oil pastels and soft pastels)",
              "Painting (watercolours, poster colours, acrylics and oil painting)",
              "Colour Theory",
              "Clay Modelling",
              "Creative thinking and visualisation",
              "Composition techniques",
              "Mixed Media",
              "Theme / Conceptual Art",
              "Study of different art styles and development of their own style",
            ]}
            imageSrc="/assets/Home/About/4.jpg"
          />
        </div>
      </div>
    </Layout>
  );
};

const AgeGroupCard = ({
  id,
  title,
  description,
  imageSrc,
}: {
  id: string;
  title: string;
  description: string[];
  imageSrc: string;
}) => {
  return (
    <div
      id={id}
      className="shadow-xl rounded-lg p-6 bg-white transform transition hover:scale-105 flex md:gap-4 flex-col sm:flex-row"
    >
      <div className="sm:w-2/3 sm:order-2 mb-4 sm:mb-0">
        <Image
          width={400}
          height={400}
          src={imageSrc}
          alt={title}
          className="rounded-lg"
        />
      </div>
      <div className="sm:w-2/3 sm:order-1">
        <h1 className="font-bold text-2xl mb-4 text-gray-800">{title}</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {description.map((item, index) => (
            <li key={index} className="font-bold text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
