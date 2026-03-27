import React, { useEffect } from "react";
import { Typography, Chip, Card, CardMedia, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./projects.scss";

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
      "REACT",
      "MongoDB",
      "SweetAlert",
      "Nodemon",
      "Material UI",
    ],
    image: futhub, // FIXED: Removed the curly braces here
    github: "https://github.com/DhamzBonaparte/FutHub",
    live: null,
  },
  {
    title: "Healthcare Management System",
    description:
      "A full-stack healthcare management system built with ASP.NET Core MVC. Features admin dashboards and patient management.",
    tech: ["C#", "ASP.NET CORE", "MVC", "HTML", "CSS", "JAVASCRIPT"],
    image: "https://via.placeholder.com/400x220", // Use valid path or placeholder
    github: "#",
    live: null,
  },
  {
    title: "Raw Endurance E-commerce",
    description:
      "A full-featured e-commerce platform for fitness and sports equipment, with secure payment processing.",
    tech: ["NEXT.JS", "TYPESCRIPT", "STRIPE", "POSTGRESQL"],
    image: "https://via.placeholder.com/400x220",
    github: "#",
    live: "https://demo.com",
    isFeatured: true,
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
