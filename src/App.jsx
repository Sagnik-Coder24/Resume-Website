import data from "./assets/data.json";
import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white">
      <Header
        name={data.personal_info.name}
        title={data.personal_info.title}
        headline={data.personal_info.headline}
        contact={data.personal_info.contact_info}
      />
      <Summary summary={data.summary} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
    </div>
  );
}

export default App;
