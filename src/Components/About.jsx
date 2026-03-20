import "./About.scss";

export default function About({ refe }) {
  const traits = ["Passionate", "Disciplined", "Skilled", "Creative"];
  const stats = [
    { title: "5+ Years", subtitle: "Coding Experience" },
    { title: "10+", subtitle: "Projects Completed" },
    { title: "3", subtitle: "Major Frameworks Mastered" },
  ];
  return (
    <>
      <div className="aboutt" ref={refe}>
        <div className="about-heading">
          <span>About Me</span>
        </div>
        <div className="about-info">
          <div className="about-left">
            <p className="about-text">
              I am <span className="highlight">Sulav Dhami</span>, a passionate
              and disciplined developer with a strong foundation in modern
              technologies. Skilled in crafting efficient solutions and creative
              designs, I thrive on turning ideas into polished, interactive
              experiences.
            </p>
            <p className="about-text">
              I enjoy building projects that challenge me to grow, blending
              logic with creativity to deliver work that is both functional and
              visually engaging. For me, coding is not just about solving
              problems, it’s about having fun while creating something
              meaningful.
            </p>
            <div className="traits-container">
              {traits.map((trait, index) => {
                return (
                  <button key={index} className={`trait-btn`}>
                    {trait}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="about-right">
            <div className="about-skills">
              <div className="stats-container">
                {stats.map((stat, index) => {
                  return (
                    <div key={index} className="stat-card">
                      <h3 className="stat-title">{stat.title}</h3>
                      <p className="stat-subtitle">{stat.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
