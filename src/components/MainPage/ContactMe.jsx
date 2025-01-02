import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "./Footer";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server or email)
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="text-center py-8 px-6 md:py-10 md:px-14 relative animate-fadeIn">
        <div className="flex w-full justify-center items-center h-fit mb-14">
          <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase">
            Contact Me
          </h1>
        </div>

        <div className="flex justify-evenly items-center flex-wrap gap-28">
          {/* Contact Form */}
          <div className="w-screen sm:w-[500px] bg-purple-950 bg-opacity-50 border-2 border-purple-600 border-opacity-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-lg text-purple-300 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name here..."
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border-2 border-purple-600 border-opacity-70 bg-black bg-opacity-20 text-purple-200 rounded-lg focus:outline-none focus:border-opacity-100 focus:placeholder-opacity-0 placeholder-purple-400 placeholder-opacity-70"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-lg text-purple-300 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email is optional..."
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border-2 border-purple-600 border-opacity-70 bg-black bg-opacity-20 text-purple-200 rounded-lg focus:outline-none focus:border-opacity-100 focus:placeholder-opacity-0 placeholder-purple-400 placeholder-opacity-70"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-lg text-purple-300 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-3 mt-2 border-2 border-purple-600 border-opacity-70 bg-black bg-opacity-20 text-purple-200 rounded-lg focus:outline-none focus:border-opacity-100 focus:placeholder-opacity-0 placeholder-purple-400 placeholder-opacity-70"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-6 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-purple-50 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="heart-container">
            <div className="heart">
              <FontAwesomeIcon
                icon={faHeart}
                size="6x"
                style={{
                  color: "red",
                  opacity: "0.8",
                  animation: "beatHeart 1.5s infinite ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactMe;
