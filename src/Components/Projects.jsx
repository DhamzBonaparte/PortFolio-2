import React, { useEffect } from "react";
import { Typography, Chip, Card, CardMedia, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import receipe from "../assets/receip2.png";
import "./projects.scss";
import multiple from "../assets/multiple.png";
import expenseTracker from "../assets/exp-track.png";
// Import image correctly
import futhub from "../assets/futhub.png";
import ttt from "../assets/ttt.png";

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
    image: futhub,
    github: "https://github.com/DhamzBonaparte/FutHub",
    live: null,
  },
  {
    title: "Expense Tracker",
    description:
      "A sleek, full-stack application built to help users manage their daily finances effortlessly. It features intuitive expense categorization, real-time balance updates, and insightful visual summaries for income and spending trends. Designed for clarity, accuracy, and smooth user experience.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "SCSS",
      "Material UI",
      "SweetAlert",
      "HTML",
      "Nodemon",
    ],
    image: expenseTracker,
    github: "https://github.com/DhamzBonaparte/Expense-tracker",
    live: "https://track-expense-now.netlify.app/",
    isfeatured: true,
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
    ],
    image: receipe, // Use valid path or placeholder
    github: "https://github.com/DhamzBonaparte/Receipe-app",
    live: "https://find-receipe.netlify.app/",
    isFeatured: true,
  },
  {
    title: "Multiple Projects",
    description: "A collection of small projects which does many functions.",
    tech: ["REACT", "HTML", "SCSS"],
    image: multiple,
    github: "https://github.com/DhamzBonaparte/Multiple-Projects",
    live: null,
  },

  {
    title: "Tic Tac Toe",
    description:
      "A classic two-player game built with HTML, CSS, and JavaScript. Features dynamic win detection, responsive design, and a clean user interface for an engaging experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ttt,
    github: "https://github.com/DhamzBonaparte/Tic-Tac-Toe",
    live: null,
  },
];

const Projects = ({ refe }) => {
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
