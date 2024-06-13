import React from "react";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-8 justify-center items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen rounded-lg shadow-lg">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-4xl text-blue-900 mb-2">
            “There’s an artist in every child”
          </h1>
          <h2 className="font-semibold text-lg text-gray-700">
            Every individual at ArtHouse814 is taught how to think, not what to
            think.
          </h2>
        </div>
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <div className="text-center mb-6">
            <h1 className="font-bold text-3xl text-blue-800">
              Age Wise Categories
            </h1>
          </div>

          <div
            id="fiveToSeven"
            className="shadow-xl rounded-lg p-6 bg-white transform transition hover:scale-105"
          >
            <h1 className="font-bold text-2xl mb-4 text-gray-800">
              5 - 7 Years
            </h1>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="font-bold text-sm">Learning fundamentals</li>
              <li className="font-bold text-sm">
                Playing with colours, exploring colour mixing and creative art
                using different mediums like oil pastels, colour pencils, soft
                pastels, watercolours and poster paints.
              </li>
              <li className="font-bold text-sm">Hand Grip</li>
              <li className="font-bold text-sm">Concentration</li>
              <li className="font-bold text-sm">Hand and eye coordination</li>
              <li className="font-bold text-sm">Collages</li>
              <li className="font-bold text-sm">Natural Clay</li>
              <li className="font-bold text-sm">Finger painting</li>
              <li className="font-bold text-sm">Texture making</li>
              <li className="font-bold text-sm">Pictorial Storytelling</li>
              <li className="font-bold text-sm">Group activities</li>
            </ul>
          </div>

          <div
            id="eightToTen"
            className="shadow-xl rounded-lg p-6 bg-white transform transition hover:scale-105"
          >
            <h1 className="font-bold text-2xl mb-4 text-gray-800">
              8 - 10 Years
            </h1>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="font-bold text-sm">
                Drawing and shading (pencils, oil pastels and soft pastels)
              </li>
              <li className="font-bold text-sm">
                Painting (watercolours and poster colours)
              </li>
              <li className="font-bold text-sm">
                Creative thinking and visualisation
              </li>
              <li className="font-bold text-sm">Natural Clay</li>
              <li className="font-bold text-sm">Collage</li>
              <li className="font-bold text-sm">Pictorial Storytelling</li>
              <li className="font-bold text-sm">
                Brain stimulation activities (situation based, alphabets)
              </li>
              <li className="font-bold text-sm">Theme based art</li>
            </ul>
          </div>

          <div
            id="elevenToFifteen"
            className="shadow-xl rounded-lg p-6 bg-white transform transition hover:scale-105"
          >
            <h1 className="font-bold text-2xl mb-4 text-gray-800">
              11 - 15 Years
            </h1>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="font-bold text-sm">
                Drawing and shading (pencils, pen, charcoal, oil pastels and
                soft pastels)
              </li>
              <li className="font-bold text-sm">
                Painting (watercolours, poster colours, acrylics and oil
                painting)
              </li>
              <li className="font-bold text-sm">Colour Theory</li>
              <li className="font-bold text-sm">Elements of art and design</li>
              <li className="font-bold text-sm">
                Creative thinking and visualisation
              </li>
              <li className="font-bold text-sm">Composition</li>
              <li className="font-bold text-sm">Clay Modelling</li>
              <li className="font-bold text-sm">Mixed Media</li>
              <li className="font-bold text-sm">Conceptual Art</li>
              <li className="font-bold text-sm">
                Study of different art styles and development of their own style
              </li>
            </ul>
          </div>

          <div
            id="adults"
            className="shadow-xl rounded-lg p-6 bg-white transform transition hover:scale-105"
          >
            <h1 className="font-bold text-2xl mb-4 text-gray-800">
              Adults (16+)
            </h1>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="font-bold text-sm">Fundamentals of Art</li>
              <li className="font-bold text-sm">
                Drawing and shading (pencils, pen, charcoal, oil pastels and
                soft pastels)
              </li>
              <li className="font-bold text-sm">
                Painting (watercolours, poster colours, acrylics and oil
                painting)
              </li>
              <li className="font-bold text-sm">Colour Theory</li>
              <li className="font-bold text-sm">Clay Modelling</li>
              <li className="font-bold text-sm">
                Creative thinking and visualisation
              </li>
              <li className="font-bold text-sm">Composition techniques</li>
              <li className="font-bold text-sm">Mixed Media</li>
              <li className="font-bold text-sm">Theme / Conceptual Art</li>
              <li className="font-bold text-sm">
                Study of different art styles and development of their own style
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
