import React, { useEffect } from "react";
import { Typography, Chip, Card, CardMedia, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import receipe from '../assets/receip2.png'
import "./projects.scss";
import multiple from "../assets/multiple.png"
// Import image correctly
import futhub from "../assets/futhub.png";

const projectData = [
  {
    title: "FutHub",
    description:
      "A professional, full-stack application designed to connect among futsal players and futsal owners. Features transparent admin workflows, booking logic, and user feedback.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "SCSS",
      "REACT",
      "MongoDB",
      "SweetAlert",
      "Nodemon",
      "HTML",
      "Material UI",
    ],
    image: futhub, // FIXED: Removed the curly braces here
    github: "https://github.com/DhamzBonaparte/FutHub",
    live: null,
  },
  {
    title: "Find Receipe",
    description:
      "A small project featuring details of different receipes found around the world.",
  tech: [
      "JavaScript",
      "HTML",
      "SCSS",
      "Vite",
      "MUI",
      "REACT",
      "Fetch API",
      "MongoDB",
    ],    image: receipe, // Use valid path or placeholder
    github: "https://github.com/DhamzBonaparte/Receipe-app",
    live: 'https://find-receipe.netlify.app/',
    isFeatured: true,

  },
  {
    title: "Multiple Projects",
    description:"A collection of small projects which does many functions.",
    tech: ["REACT","HTML","SCSS"],
    image: multiple,
    github: "https://github.com/DhamzBonaparte/Multiple-Projects",
    live: null,
  },
];

const Projects = ({refe}) => {
  // useEffect(() => {
  //   document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  // });
  return (
    <>
      <section className="projects-section" ref={refe}>
        <div className="section-header">
          <Typography variant="h2" className="header-text">
            Projects
          </Typography>
        </div>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <Card key={index} className={`project-card featured`} elevation={0}>
              <div className="image-wrapper">
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.live && <span className="live-badge">LIVE DEMO</span>}
              </div>

              <CardContent className="card-body">
                <Typography variant="h5" className="project-title">
                  {project.title}
                </Typography>

                <Typography variant="body2" className="project-desc">
                  {project.description}
                </Typography>

                <div className="tech-stack">
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} className="tech-chip" />
                  ))}
                </div>

                <div className="card-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    GITHUB{" "}
                    <ArrowForwardIcon
                      style={{ fontSize: "1rem", marginLeft: "4px" }}
                    />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link"
                    >
                      VISIT SITE{" "}
                      <OpenInNewIcon
                        style={{ fontSize: "1rem", marginLeft: "4px" }}
                      />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
