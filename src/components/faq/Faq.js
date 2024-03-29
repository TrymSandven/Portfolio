import React, { useEffect } from "react";
import "./Faq.css";
import pdf from "../../assets/UtfyllendeOnePage.pdf";

import { MdOutlineLibraryBooks } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const projectList = [
  {
    title: "Prototype arbeid for NTB Media",
    description:
      "Semesteroppgave for NTB Media. Var med å lage en prototype for automatisering av værnyheter. Artikkel fra Teklab.no",
    url: " https://teklab.uib.no/artikler/vaer-robot-a-effektivisere-vaer-nytt-gjennom-automatiserte-tekster/",
  },
  {
    title: "Maskinlæring med data frå Spotify",
    description:
      "Semesteroppgave i maskinlærring som ser på data fra Spotify og prøver å predikere om et album kommer til å være populært eller ikke.",
    url: "https://github.com/TrymSandven/Gruppeeksamen_2022/blob/main/group_exam22.ipynb",
  },
  {
    title: "Portefølje nettside",
    description:
      "Kildekode til denne nettsiden har et eget Github repo. Laget med React og CSS.",
    url: "https://github.com/TrymSandven/Portfolio",
  },
  {
    title: "Utvikling av ESS Dataportal",
    description:
      "I sommerjobben hos Sikt var jeg med å utvikle en nettside for ESS. Nettsiden er laget med Vue, Typescript og Tailwind.",
    url: pdf,
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="light" id="portfolio">
      <div className="u-title" data-aos="fade-up">
        <MdOutlineLibraryBooks color="orangered" size={30} />
        <h2>Portefølje</h2>
      </div>
      <div>
        <div></div>
        <div className="flex-box" data-aos="zoom-in">
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
 