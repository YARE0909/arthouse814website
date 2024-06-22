import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Map, Marker } from "pigeon-maps";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleEnquiryFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        alert("Enquiry submitted successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpenLink = () => {
    window.open(
      "https://www.google.co.in/maps/place/Art+House+814/@13.0225985,77.6436839,17z/data=!4m14!1m7!3m6!1s0x3bae172eedd1abc3:0x4019a8d9b406b0ce!2sArt+House+814!8m2!3d13.0225985!4d77.6462588!16s%2Fg%2F11g6b0h9x5!3m5!1s0x3bae172eedd1abc3:0x4019a8d9b406b0ce!8m2!3d13.0225985!4d77.6462588!16s%2Fg%2F11g6b0h9x5?hl=en-in&entry=ttu",
      "_blank"
    );
  };

  return (
    <footer className="w-full h-full flex justify-between p-4 bg-white">
      <div className="w-full flex flex-col lg:flex lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-bold">Arthouse 814 ©2024</h1>
          </div>
          <div onClick={handleOpenLink} className="cursor-pointer">
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
                <a
                  target="_blank"
                  href="https://www.instagram.com/alokkudige/?hl=en"
                >
                  <IoLogoInstagram />
                </a>
              </div>
              <div className="flex items-center gap-1">
                <a
                  target="_blank"
                  href="https://www.facebook.com/p/Art-House-814-100064240081396/"
                >
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <FaPhone />
              </div>
              <div>
                <a
                  href="tel:+91 9972658401"
                  className="text-xs font-medium hover:text-blue-500 duration-300"
                >
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
                  className="text-xs font-medium hover:text-blue-500 duration-300"
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
                  className="text-xs font-medium hover:text-blue-500 duration-300 flex flex-col gap-1"
                >
                  <span>
                    1st, 814, 5th A Cross Rd, HRBR Layout 1st Block, HRBR
                    Layout, Kalyan Nagar, Bengaluru, Karnataka 560043, India,
                  </span>
                  <span>Landmark : Next to Royal Enfield Showroom</span>
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
                  name="name"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="message"
                  className="border-2 border-gray-200 px-2 py-1 w-full text-sm rounded-md"
                  onChange={handleInputChange}
                  value={formData.message}
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
