import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { galleryImages, parentTestimonials } from "@/Data/Home";
import ParentTestimonialCard from "@/components/Home/ParentTestimonialCard";
import { Gallery } from "react-grid-gallery";
import CarouselComponent from "@/components/Home/Carousel";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Link from "next/link";

const Index = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="p-4 w-full flex flex-col gap-10">
        {/* Logo Section */}
        <section className="flex flex-col items-center">
          <Image
            src="/assets/logo.png"
            alt="Arthouse 814 Logo"
            width={200}
            height={200}
          />
        </section>

        {/* Carousel Section */}
        <section className="w-full">
          <CarouselComponent />
        </section>

        {/* Our Journey Section */}
        <section className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-purple-700">Our Journey</h1>
          <p className="max-w-3xl text-sm font-medium">
            Established in 2015, Arthouse814 is a fine art institution that
            gives individual attention and nurture to its students. The children
            are engaged on the basis of their age and skills. Each child is
            analyzed to understand their strength and skills. We aim to help
            each student reach their full potential.
          </p>
          <Image src="/assets/Home/About/person.jpg" alt="Placeholder" width={400} height={400} />
          <p className="max-w-3xl text-sm font-medium">
            Alok Kudige is a Chitrakala Parishath graduate who specialized in
            painting with a postgraduate degree in design communications,
            effectively used in guiding students through in-depth training and
            building perception. He started as a freelancer, climbing stepping
            stones towards working in Asian Paints as a design consultant. As he
            began his journey to become a teacher, he started at an art school,
            finding passion in his work, he branched out individually.
          </p>
        </section>

        {/* Filler Images Section */}
        <section className="flex flex-wrap justify-center gap-5">
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
        </section>

        {/* Art Classes Section */}
        <section className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold text-green-700">Art Classes</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                age: "5-7 Years",
                items: [
                  "Learning fundamentals",
                  "Concentration",
                  "Hand Grip",
                  "Hand and eye coordination",
                ],
              },
              {
                age: "8-14 Years",
                items: [
                  "Natural Clay",
                  "Collage",
                  "Painting",
                  "Pictorial Storytelling",
                  "Theme based art",
                ],
              },
              {
                age: "15+ Years",
                items: [
                  "Drawing and shading",
                  "Painting",
                  "Colour Theory",
                  "Elements of art and design",
                  "Creative thinking and visualisation",
                ],
              },
              {
                age: "Adult",
                items: [
                  "Fundamentals of Art",
                  "Drawing and shading",
                  "Colour Theory",
                  "Clay Modelling",
                  "Mixed Media",
                ],
              },
            ].map((group) => (
              <div
                key={group.age}
                className="w-60 p-4 bg-white shadow-xl flex flex-col justify-between gap-5 rounded-lg"
                onClick={() => router.push("/artClasses")}
              >
                <div>
                  <h2 className="font-semibold text-center">{group.age}</h2>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    {group.items.map((item, index) => (
                      <li
                        key={index}
                        className="list-disc list-inside text-sm font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full">
                  <Link
                    className="w-full flex justify-center items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-300"
                    href="/artClasses"
                  >
                    <h1 className="font-medium text-xs text-white">
                      Read More
                    </h1>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Art Therapy Section */}
        <section className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-blue-700">Art Therapy</h1>
          <p className="max-w-3xl text-sm font-medium">
            Art therapy is an alternative method to help a child with special
            needs work through issues that are troubling to their development.
            Art therapy has proven to be a successful form of treatment for
            special education students having autism, ADHD, dyslexia, and other
            developmental, behavioral, emotional, or psychological issues. It
            allows children to express themselves in non-verbal ways through the
            use of art tools and supplies.
          </p>
        </section>

        {/* Student Stories Section */}
        <section className="flex flex-col items-center space-y-8">
          <h1 className="text-3xl font-bold text-red-700">Student Stories</h1>
          {[1, 2].map((index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-5`}
            >
              <Image
                src="https://source.unsplash.com/random"
                alt="Placeholder"
                className="lg:w-[40%] w-full h-full object-cover rounded-lg shadow-lg"
                width={400}
                height={400}
              />
              <div className="w-full lg:w-[60%] p-4 bg-white shadow-xl rounded-lg">
                <h2 className="font-bold text-xl mb-2">Student Name</h2>
                <p className="text-sm font-medium">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error, minus facilis neque vitae maiores cupiditate, officia
                  qui dicta perferendis dolores recusandae repellat ullam quidem
                  reprehenderit pariatur amet blanditiis rerum exercitationem.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error, minus facilis neque vitae maiores cupiditate, officia
                  qui dicta perferendis dolores recusandae repellat ullam quidem
                  reprehenderit pariatur amet blanditiis rerum exercitationem.
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Parent Testimonials Section */}
        <section className="flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold text-yellow-700">
            Parent Testimonials
          </h1>
          <div className="w-full overflow-x-auto">
            <div className="flex flex-col md:flex md:flex-row items-center lg:items-start gap-5 space-x-5 p-2">
              {parentTestimonials.map((testimonial) => (
                <ParentTestimonialCard
                  key={testimonial.parentName}
                  parentName={testimonial.parentName}
                  image={testimonial.image}
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
            <Gallery images={galleryImages} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
