import React, { useRef, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { galleryImages, parentTestimonials } from "@/Data/Home";
import ParentTestimonialCard from "@/components/Home/ParentTestimonialCard";
import { Gallery } from "react-grid-gallery";
import CarouselComponent from "@/components/Home/Carousel";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const initialImageCarouselList = [
    "/assets/Home/Carousel/1.jpg",
    "/assets/Home/Carousel/2.jpg",
    "/assets/Home/Carousel/3.jpg",
    "/assets/Home/Carousel/4.jpg",
    "/assets/Home/Carousel/5.jpg",
  ];

  const exhibitionImages = [
    "/assets/Home/ExhibitionCarousel/1.jpg",
    "/assets/Home/ExhibitionCarousel/2.jpg",
    "/assets/Home/ExhibitionCarousel/3.jpg",
    "/assets/Home/ExhibitionCarousel/4.jpg",
  ];

  return (
    <Layout>
      <div className="p-4 w-full flex flex-col gap-10">
        {/* Logo Section */}
        <section className="flex flex-col items-center">
          <Image
            src="/assets/logo.jpg"
            alt="Arthouse 814 Logo"
            width={200}
            height={200}
            className="w-1/3"
          />
        </section>

        {/* Carousel Section */}
        <section className="w-full">
          <CarouselComponent imageList={initialImageCarouselList} />
        </section>

        {/* Our Journey Section */}
        <section className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-purple-700 font-Elephant">
            Our Journey
          </h1>
          <p className="max-w-3xl text-sm font-medium">
            Established in 2015, Arthouse814 is a fine art institution that
            gives individual attention and nurture to its students. The children
            are engaged on the basis of their age and skills. Each child is
            analyzed to understand their strength and skills. We aim to help
            each student reach their full potential.
          </p>
          <Image
            src="/assets/Home/About/person.jpg"
            alt="Placeholder"
            width={400}
            height={400}
          />
          <p className="max-w-3xl text-sm font-medium">
            Alok Kudige is a Chitrakala Parishath graduate who specialized in
            painting with a postgraduate degree in design communications,
            effectively used in guiding students through in-depth training and
            building perception. He started as a freelancer, climbing stepping
            stones towards working in Asian Paints as a design consultant. He
            has exhibited his artwork nationally and internationally in numerous
            galleries. As he began his journey to become a teacher, he started
            at an art school, finding passion in his work, he branched out
            individually.
          </p>
        </section>

        <section className="w-full flex flex-col gap-5">
          <div className="w-full">
            <CarouselComponent imageList={exhibitionImages} />
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <Image
              src={"/assets/Home/About/1.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
            <Image
              src={"/assets/Home/About/2.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
            <Image
              src={"/assets/Home/About/3.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
            <Image
              src={"/assets/Home/About/4.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
          </div>
        </section>

        {/* Art Classes Section */}
        <section className="flex flex-col items-center space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-[#00FFFF] font-Jokerman">
              Art Classes
            </h1>
          </div>
          {/* Filler Images Section */}
          <div className="w-fit grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="w-full p-4 bg-white shadow-xl flex flex-col justify-between gap-5 rounded-lg">
              <div>
                <h2 className="font-semibold text-center text-orange-400 font-LucidaCalligraphy">
                  5-7 Years
                </h2>
                <ul className="mt-2 space-y-1 text-gray-600 text-sm font-LucidaCalligraphy">
                  <li className="list-disc list-inside text-sm font-medium">
                    Learning fundamentals
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Concentration
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Hand Grip
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Hand and eye coordination
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/Home/ArtClasses/1.jpg"
                  alt="5-7 Years"
                  className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <Link
                  className="w-full max-w-64 flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
                  href="/artClasses#fiveToSeven"
                >
                  <h1 className="font-medium text-xs text-white">Read More</h1>
                </Link>
              </div>
            </div>

            <div className="w-full p-4 bg-white shadow-xl flex flex-col justify-between gap-5 rounded-lg">
              <div>
                <h2 className="font-semibold text-center text-green-400 font-LucidaCalligraphy">
                  8-14 Years
                </h2>
                <ul className="mt-2 space-y-1 text-gray-600 text-sm font-LucidaCalligraphy">
                  <li className="list-disc list-inside text-sm font-medium">
                    Natural Clay
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Collage
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Painting
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Pictorial Storytelling
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Theme based art
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/Home/ArtClasses/2.jpg"
                  alt="8-14 Years"
                  className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <Link
                  className="w-full max-w-64 flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
                  href="/artClasses#eightToTen"
                >
                  <h1 className="font-medium text-xs text-white">Read More</h1>
                </Link>
              </div>
            </div>

            <div className="w-full p-4 bg-white shadow-xl flex flex-col justify-between gap-5 rounded-lg">
              <div>
                <h2 className="font-semibold text-center text-[#DC143C] font-LucidaCalligraphy">
                  15+ Years
                </h2>
                <ul className="mt-2 space-y-1 text-gray-600 text-sm font-LucidaCalligraphy">
                  <li className="list-disc list-inside text-sm font-medium">
                    Drawing and shading
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Painting
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Colour Theory
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Elements of art and design
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Creative thinking and visualisation
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/Home/ArtClasses/3.jpg"
                  alt="15+ Years"
                  className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <Link
                  className="w-full max-w-64 flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
                  href="/artClasses#elevenToFifteen"
                >
                  <h1 className="font-medium text-xs text-white">Read More</h1>
                </Link>
              </div>
            </div>

            <div className="w-full p-4 bg-white shadow-xl flex flex-col justify-between gap-5 rounded-lg">
              <div>
                <h2 className="font-semibold text-center font-LucidaCalligraphy">
                  Adult
                </h2>
                <ul className="mt-2 space-y-1 text-gray-600 text-sm font-LucidaCalligraphy">
                  <li className="list-disc list-inside text-sm font-medium">
                    Fundamentals of Art
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Drawing and shading
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Colour Theory
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Clay Modelling
                  </li>
                  <li className="list-disc list-inside text-sm font-medium">
                    Mixed Media
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/Home/ArtClasses/4.jpg"
                  alt="Adult"
                  className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <Link
                  className="w-full max-w-64 flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
                  href="/artClasses#adults"
                >
                  <h1 className="font-medium text-xs text-white">Read More</h1>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Art Therapy Section */}
        <section className="flex flex-col gap-5 items-center text-center space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-green-700">Art Therapy</h1>
          </div>
          <div>
            <p className="max-w-3xl text-sm font-medium">
              Art therapy is an alternative method to help a child with special
              needs work through issues that are troubling to their development.
              Art therapy has proven to be a successful form of treatment for
              special education students having autism, ADHD, dyslexia, and
              other developmental, behavioral, emotional, or psychological
              issues. It allows children to express themselves in non-verbal
              ways through the use of art tools and supplies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <Image
              src={"/assets/Home/ArtTherapy/1.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
            <Image
              src={"/assets/Home/ArtTherapy/2.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
            <Image
              src={"/assets/Home/ArtTherapy/3.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
            <Image
              src={"/assets/Home/ArtTherapy/4.jpg"}
              alt="Placeholder"
              className="w-24 h-24 lg:w-44 lg:h-44 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full flex justify-center">
            <Link
              className="w-56 flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
              href="/artTherapy"
            >
              <h1 className="font-medium text-xs text-white">Read More</h1>
            </Link>
          </div>
        </section>

        {/* Student Stories Section */}
        <section className="flex flex-col gap-5 items-center space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-red-700">Student Stories</h1>
          </div>
          <div className="flex flex-col gap-10">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex flex-col lg:flex-row items-center gap-5">
                <div className="w-full">
                  <video
                    width="100%"
                    loop
                    controls
                    muted
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="assets/Home/StudentStories/1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Testimonials Section */}
        <section className="flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold text-yellow-700">
            Parent Testimonials
          </h1>
          <div className="w-full">
            <div className="w-full flex flex-wrap gap-4 justify-center">
              {parentTestimonials.map((testimonial) => (
                <ParentTestimonialCard
                  key={testimonial.parentName}
                  parentName={testimonial.parentName}
                  testimonial={testimonial.testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold text-teal-700">Gallery</h1>
          <div className="w-full">
            <video width="400" controls className="w-full" muted loop>
              <source src="assets/Home/Gallery/video.MOV" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
          <div className="w-full">
            <Gallery images={galleryImages} />
          </div>
          <div className="w-full flex justify-end">
            <Link
              className="w-fit flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
              href="/gallery"
            >
              <h1 className="font-medium text-xs text-white">
                <FaArrowRight className="text-white text-xl" />
              </h1>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
