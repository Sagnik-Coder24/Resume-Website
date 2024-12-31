import data from "./assets/data.jsx";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

import "./index.css";
import "./App.css";
import bg2 from "./assets/images/banners/bg2.jpg";

import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/Notfound.jsx";
import ContactMe from "./components/ContactMe.jsx";
import BackToTop from "./components/Button/BackToTop.jsx";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-darkBg text-white">
        <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
          <img
            src={bg2}
            alt="Banner"
            className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
          />
        </div>
        <BackToTop />

        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Header
                pic={data.personal_info.profile_picture}
                name={data.personal_info.name}
                title={data.personal_info.title}
                headline={data.personal_info.headline}
                contact={data.personal_info.contact_info}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <Summary
                summary={data.summary}
                interests={data.interests}
                languages={data.languages}
                location={data.personal_info.location}
              />
            }
          />
          <Route path="/skills" element={<Skills skills={data.skills} />} />
          <Route
            path="/experience"
            element={<Experience experience={data.experience} />}
          />
          <Route
            path="/education"
            element={<Education education={data.education} />}
          />
          <Route
            path="/certifications"
            element={
              <Certifications
                certifications={data.certifications.data}
                link={data.certifications.link}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                projects={data.projects}
                gh={data.personal_info.contact_info.github}
              />
            }
          />
          <Route
            path="/publications"
            element={
              <Publications
                publications={data.publications}
                medium={data.personal_info.contact_info.medium}
              />
            }
          />
          <Route path="/contact" element={<ContactMe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
