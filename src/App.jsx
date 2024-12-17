import data from "./assets/data.jsx";
import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

import "./index.css";
import "./App.css";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Languages from "./components/Languages.jsx";
import Interests from "./components/Interests.jsx";
import Publications from "./components/Publications.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/Notfound.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darkBg text-white">
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
                location={data.personal_info.location}
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
            element={<Certifications certifications={data.certifications} />}
          />
          <Route
            path="/projects"
            element={<Projects projects={data.projects} />}
          />
          <Route
            path="/publications"
            element={<Publications publications={data.publications} />}
          />
          <Route path="/contact" element={<ContactMe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
