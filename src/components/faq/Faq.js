import React, { useEffect } from "react";
import "./Faq.css";


const projectList = [
  {
    title: "Prototype arbeid for NTB Media",
    description:
      "Semesteroppdrag for NTB Media. Laget en prototype for en ny automatisering av værnyheter.",
    url: " https://teklab.uib.no/",
  },
  {
    title: "Løysningsforslag for Advent of Code 2022",
    description: "Github repo med løysningar for Advent of Code 2022",
    url: "https://github.com/TrymSandven/Adventskalender-2022",
  },
  {
    title: "CV",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Maskinlæring med data frå Spotify",
    description:
      "Maskinlærring som ser på data frå Spotify og prøver å predikere om eit album kjem til å vere populært eller ikkje.",
    url: "https://github.com/TrymSandven/Gruppeeksamen_2022/blob/main/group_exam22.ipynb",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <div className="u-title">
      <h2>Portfolie</h2>
      </div>
      <div>
        <div>
        </div>
        <div className="flex-box">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="project-name">{project.title}</h3>
              </a>
              <p className="u-text-small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;