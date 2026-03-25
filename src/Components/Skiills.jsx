import React from "react";
import "./Skills.scss";

const Skills = ({ refe }) => {
  const skillData = [
    {
      category: "Languages",
      items: ["C", "JavaScript", "Python", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    },
    {
      category: "Frontend & UI",
      items: [
        "React",
        "SCSS",
        "Responsive Design",
        "SweetAlert2",
        "User-centric workflows",
      ],
    },
    {
      category: "Frameworks & Tools",
      items: ["Git/GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Axios"],
    },
    {
      category: "Workflow & Debugging",
      items: [
        "Route consistency",
        "Middleware integration",
        "Error handling",
        "Transparent admin panels",
        "Safe deletion/disapproval flows",
      ],
    },
  ];

  return (
    <section className="skills-card" ref={refe}>
      <div className="skills-card__header">
        <h2 className="skills-card__title">Skills</h2>
        <div className="skills-card__icon-stack">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="skills-card__content">
        {skillData.map((group, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-group__label">{group.category}</h3>
            <div className="skill-group__list">
              {group.items.map((skill, i) => (
                <div key={i} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
