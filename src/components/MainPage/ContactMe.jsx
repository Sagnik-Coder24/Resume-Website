import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Swal from "sweetalert2";

const access_key = import.meta.env.VITE_ACCESS_KEY;

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been successfully sent. Thanks for contacting.",
      showConfirmButton: true,
      confirmButtonColor: "#6a0dad",
      customClass: {
        popup: "bg-gray-800 text-white rounded-lg",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        e.target.submit();
      }
    });
  };

  return (
    <section className="text-center py-8 px-6 md:py-10 md:px-14 relative animate-fadeIn">
      <div className="flex w-full justify-center items-center h-fit mb-14">
        <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase">
          Contact Me
        </h1>
      </div>

      <div className="flex justify-evenly items-start flex-wrap gap-x-28 gap-y-10">
        {/* Contact Form */}
        <div className="w-screen sm:w-[500px] bg-purple-950 bg-opacity-50 border-2 border-purple-600 border-opacity-50 p-8 rounded-2xl">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-8 "
          >
            <input type="hidden" name="access_key" value={access_key}></input>
            <input
              type="hidden"
              name="redirect"
              value="http://localhost:5173/"
            ></input>
            <div>
              <label
                htmlFor="name"
                className="block text-left text-lg text-purple-300 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name here..."
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
                name="message"
                id="message"
                placeholder="Type your message here..."
                rows="6"
                className="w-full p-3 mt-2 border-2 border-purple-600 border-opacity-70 bg-black bg-opacity-20 text-purple-200 rounded-lg focus:outline-none focus:border-opacity-100 focus:placeholder-opacity-0 placeholder-purple-400 placeholder-opacity-70"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-6 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-purple-50 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden flex gap-x-4"
              >
                <p>Send Message</p>
                <div className="mt-[1px] group-hover:translate-x-[100%] transition-all duration-300">
                  <FontAwesomeIcon icon={faArrowRight} size="sm" />
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-between items-center flex-col gap-16 min-h-[40vh] p-5 mb-16">
          <div className="">
            <p className="text-xl tracking-wide font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              Get in touch...
            </p>
            <hr className="w-1/2 mt-2 border-2 rounded-full border-purple-600 border-opacity-90" />
          </div>
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
  );
};

export default ContactMe;
