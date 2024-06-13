import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Map, Marker } from "pigeon-maps";

const Index = () => {
  const handleEnquiryFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted");
    // TODO: Handle form submission
  };

  return (
    <footer className="w-full flex justify-between p-4 bg-white">
      <div className="w-full flex flex-col lg:flex lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-bold">Arthouse 814 ©2024</h1>
          </div>
          <div>
            <Map
              height={200}
              width={200}
              defaultCenter={[13.041394, 77.656515]}
              defaultZoom={15}
            >
              <Marker width={30} anchor={[13.041394, 77.656515]} />
            </Map>
          </div>
        </div>
        <div className="flex flex-col h-full gap-2">
          <div>
            <h1 className="font-bold">Contact</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <IoLogoInstagram />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <FaXTwitter />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <FaFacebookSquare />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <FaPhone />
              </div>
              <div>
                <a href="tel:+91 9972658401" className="text-xs font-medium">
                  +91 9972658401
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <MdEmail />
              </div>
              <div>
                <a
                  href="mailto:thearthouse814@gmail.com"
                  className="text-xs font-medium"
                >
                  thearthouse814@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <FaLocationDot />
              </div>
              <div>
                <a
                  href="https://www.google.co.in/maps/place/Art+House+814/@13.0225985,77.6436839,17z/data=!4m14!1
m7!3m6!1s0x3bae172eedd1abc3:0x4019a8d9b406b0ce!2sArt+House+814!8m2!3d13.0225985!4d7
7.6462588!16s%2Fg%2F11g6b0h9x5!3m5!1s0x3bae172eedd1abc3:0x4019a8d9b406b0ce!8m2!3d
13.0225985!4d77.6462588!16s%2Fg%2F11g6b0h9x5?hl=en-in&amp;entry=ttu"
                  target="_blank"
                  className="text-xs font-medium"
                >
                  1st, 814, 5th A Cross Rd, HRBR Layout 1st Block, HRBR Layout,
                  Kalyan Nagar, Bengaluru, Karnataka 560043, India
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div>
            <h1 className="font-bold">Enquiry Form</h1>
          </div>
          {/* Enquiry Form */}
          <div className="w-full">
            <form
              onSubmit={handleEnquiryFormSubmit}
              className="flex flex-col gap-3 w-full"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="Message"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 w-full text-sm rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
