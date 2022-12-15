/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio-bilde.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
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
      <h2 style={{ paddingTop: "3rem" }}>Portfolie</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
