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

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white">
      <Navbar />
      <Header
        pic={data.personal_info.profile_picture}
        name={data.personal_info.name}
        title={data.personal_info.title}
        headline={data.personal_info.headline}
        contact={data.personal_info.contact_info}
        location={data.personal_info.location}
      />
      {/* <Summary summary={data.summary} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Certifications certifications={data.certifications} />
      <Projects projects={data.projects} />
      <Interests interests={data.interests} />
      <Languages languages={data.languages} />
      <Publications publications={data.publications} />{" "} */}
    </div>
  );
}

export default App;
