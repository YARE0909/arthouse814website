import React from "react";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-cyan-800">Art Therapy</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Children with special needs */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Children with Special Needs
            </h2>
            <p className="text-gray-800 text-sm font-medium mb-4">
              “If a child can’t learn the way we teach, maybe we should teach
              the way they learn.” Art therapy is an alternative method to help
              a child with special needs work through issues that are troubling
              to their development.
            </p>
            <p className="text-gray-800 text-sm font-medium mb-4">
              Art therapy has proven to be a successful form of treatment for
              special education students having autism, ADHD, dyslexia and other
              developmental, behavioral, emotional or psychological issues. It
              allows children to express themselves in non-verbal ways through
              the use of art tools and supplies.
            </p>
            <p className="text-gray-800 text-sm font-medium mb-4">
              At Arthouse, every child is tended to in a personalized way to
              cater to their specific needs and abilities.
            </p>
            <ul className="list-disc ml-8 text-gray-800 text-sm font-medium">
              <li className="font-semibold">Hand Grip</li>
              <li className="font-semibold">Hand and Eye Coordination</li>
              <li className="font-semibold">Fine Motor Skills</li>
              <li className="font-semibold">Cognitive Skills</li>
              <li className="font-semibold">Stimulation Activities</li>
              <li className="font-semibold">Concentration</li>
              <li className="font-semibold">Sensory Stimulation</li>
              <li className="font-semibold">Stress Reduction</li>
              <li className="font-semibold">
                Self Expression and Communication
              </li>
              <li className="font-semibold">Creativity</li>
            </ul>
          </div>

          {/* Adults */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Adults</h2>
            <p className="text-gray-800 mb-4 text-sm font-medium">
              “Art can permeate the deepest part of us where no words exist.” In
              a world of everlasting troubles, to create balance is a difficult
              task. Art provides the freedom of expression and discovery of self
              without the hindrance of limits.
            </p>
            <p className="text-gray-800 mb-4 text-sm font-medium">
              Arthouse814 offers you a journey with helping hands that provide a
              path towards this balance. Here, individuals are encouraged to
              form a self-concept through expressing in art that requires them
              to travel through themselves and explore, creating thorough
              connections with their work.
            </p>
            <p className="text-gray-800 mb-4 text-sm font-medium">
              Expressive art provides a pathway for a safe, non-judgmental
              setting to facilitate personal growth and healing that helps the
              individual gain identity, self-confidence and provides the
              individual the ability to channel their creativity.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">
            Testimonials
          </h2>
          {/* Testimonial 1 */}
          <div className="w-full flex flex-col lg:flex lg:flex-row gap-2">
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6">
              <p className="text-green-800 mb-4 text-sm font-medium">
                I get Sohana over the weekends to spend time with Alok, who is
                the art teacher. My daughter is a special child and my intent is
                to use art as a way to build her cognitive skills. Alok is an
                effective teacher who is patient, applies techniques to help
                her, is very patient with her and works with her at her pace.
                I’m certain that over a period of time, with Alok&apos;s
                expertise, Sohana will be able to use Art as a way of expressing
                herself. I am lucky that I found such an empathetic teacher who
                is devoted to all his students and works to make them successful
                and that includes, my Sohana too.
              </p>
              <p className="text-green-800 font-bold">- Suchismita Burman</p>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6">
              <p className="text-green-800 mb-4 text-sm font-medium">
                We have been sending our kid for almost 8 months now. Alok is
                very Accommodating, Patient and Knowledgeable person. Would
                recommend him anytime!
              </p>
              <p className="text-green-800 font-bold">- Kranthi Kurakula</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
