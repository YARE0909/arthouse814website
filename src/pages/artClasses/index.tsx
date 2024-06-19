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
              "Experimenting with colours, exploring colour mixing and creative art using different mediums including oil pastels, colour pencils, soft pastels, watercolours and poster paints.",
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
            imageSrc={[
              "/assets/ArtClasses/First/1.jpg",
              "/assets/ArtClasses/First/2.jpg",
              "/assets/ArtClasses/First/3.jpg",
              "/assets/ArtClasses/First/4.jpg",
            ]}
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
              "Brain Stimulation Activities",
              "Theme based art",
            ]}
            imageSrc={[
              "/assets/ArtClasses/Second/1.jpg",
              "/assets/ArtClasses/Second/2.jpg",
              "/assets/ArtClasses/Second/3.jpg",
              "/assets/ArtClasses/Second/4.jpg",
            ]}
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
            imageSrc={[
              "/assets/ArtClasses/Third/1.jpg",
              "/assets/ArtClasses/Third/2.jpg",
              "/assets/ArtClasses/Third/3.jpg",
              "/assets/ArtClasses/Third/4.jpg",
            ]}
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
            imageSrc={[
              "/assets/ArtClasses/Fourth/1.jpg",
              "/assets/ArtClasses/Fourth/2.jpg",
              "/assets/ArtClasses/Fourth/3.jpg",
              "/assets/ArtClasses/Fourth/4.jpg",
            ]}
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
  imageSrc: string[];
}) => {
  return (
    <div
      id={id}
      className="shadow-xl rounded-lg p-6 bg-white transform transition hover:scale-105 flex gap-5 flex-col sm:flex-row"
    >
      <div className="sm:w-2/3 sm:order-1">
        <h1 className="font-bold text-2xl mb-4 text-gray-800">{title}</h1>
        {title === "5 - 7 Years" && (
          <h1 className="font-bold text-sm pb-2">
            “Every child is an artist. The problem is how to remain an artist
            once we grow up.”- Picasso
          </h1>
        )}
        {title === "11 - 15 Years" && (
          <h1 className="font-bold text-sm pb-2">
            “Have no fear of perfection, you&apos;ll never reach it.”- Dali
          </h1>
        )}
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {description.map((item, index) => (
            <li key={index} className="font-bold text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {imageSrc.map((src, index) => (
          <Image
            key={index}
            width={200}
            height={200}
            src={src}
            alt={`${title} ${index + 1}`}
            className="rounded-lg object-cover w-44 h-44"
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
