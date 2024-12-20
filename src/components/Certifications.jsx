import React, { useEffect, useState } from "react";
import bg2 from "../assets/images/banners/bg2.jpg";
import Button from "./Button/Button";

const Certifications = ({ certifications, link }) => {
  let reversedCertifications = [...certifications].reverse();

  let mySkills = new Set();

  certifications.forEach((cert) => {
    cert.skills.forEach((skill) => {
      mySkills.add(skill.toUpperCase());
    });
  });

  const [filterSkill, setFilterSkill] = useState(null);
  const [certificates, setCertificates] = useState(reversedCertifications);

  const skillClick = (skill) => {
    filterSkill === skill ? setFilterSkill(null) : setFilterSkill(skill);
  };

  useEffect(() => {
    if (filterSkill) {
      let filterCert = reversedCertifications.filter((cert) =>
        cert.skills.some((skill) => skill.toUpperCase() === filterSkill)
      );
      setCertificates(filterCert);
    } else {
      setCertificates(reversedCertifications);
    }
  }, [filterSkill]);

  return (
    <section className="text-center py-12 px-4 sm:px-20">
      <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
        <img
          src={bg2}
          alt="Banner"
          className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
        />
      </div>

      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none animate-slideIn">
        CERTIFICATIONS
      </h1>

      <div className="my-10 flex justify-center items-center gap-4 flex-wrap text-sm text-purple-200 whitespace-nowrap animate-slideIn">
        {Array.from(mySkills).map((skill, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 border-2 border-purple-600 rounded-full w-[100px]  hover:bg-purple-600 hover:text-purple-100 transition-all ease-in-out duration-300 ${
              skill === filterSkill
                ? "bg-purple-600 text-purple-100"
                : "bg-purple-950 bg-opacity-40"
            }`}
            onClick={() => skillClick(skill)}
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-x-24 gap-y-10 animate-slideIn">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-purple-950 bg-opacity-40 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-600 border-opacity-40 w-[320px] h-[370px]"
          >
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              <div className="relative mb-6 select-none">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg border-4 border-purple-600 shadow-lg hover:shadow-2xl transform transition-all ease-in-out duration-300"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-purple-950 bg-opacity-70 rounded-lg transition-all duration-300">
                  <p className="text-purple-100 text-lg font-semibold">
                    View Certificate
                  </p>
                </div>
              </div>
            </a>
            <div className="h-[90px] flex justify-center items-center">
              <div className="">
                <h3 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                  {cert.title}
                </h3>
                <p className="text-sm text-purple-100 opacity-60 tracking-wide leading-relaxed mt-2 capitalize">
                  {cert.organization}
                </p>
                {/* <p className="text-sm mt-2 text-gray-500">{cert.date}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button text={"View All Certificates"} />
        </a>
      </div>
    </section>
  );
};

export default Certifications;
