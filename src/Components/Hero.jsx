import "./Hero.scss";
import heroPic from "../assets/pic.png";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CodeIcon from "@mui/icons-material/Code";
import SparklesIcon from "@mui/icons-material/AutoAwesome";
import SendIcon from "@mui/icons-material/Send";

export default function Hero({ refe, proRef, contRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goToContacts = () => {
    contRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToProjects = () => {
    proRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <>
      <div className="hero" ref={refe}>
        <div className="hero-content">
          <div className="left" onMouseMove={handleMouseMove}>
            <div className="image-wrapper">
              <div className="glow-effect" style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(142, 45, 226, 0.3), rgba(74, 0, 224, 0.1))`
              }}></div>
              <img src={heroPic} alt="Profile_image" className="floating-img" />
            </div>
          </div>

          <div className="right">
            
            <h1 className={`title ${isVisible ? 'visible' : ''}`}>
              Hi, I'm <span className="gradient-text">Sulav Dhami</span>
              <div className="cursor"></div>
            </h1>
            
            <div className={`typing-container ${isVisible ? 'visible' : ''}`}>
              <p className="typing-text">
                I build <span className="highlight">exceptional</span> digital experiences
              </p>
            </div>
            
            <p className={`subtitle ${isVisible ? 'visible' : ''}`}>
              A <strong>Full Stack Developer</strong> specializing in the{" "}
              <strong className="mern-stack">MERN stack</strong> and{" "}
              <strong className="python-stack">Python</strong>, creating efficient, 
              scalable applications with modern design and robust functionality.
            </p>
            
            <div className={`button-container ${isVisible ? 'visible' : ''}`}>
              <button className="btn contact-btn" onClick={goToContacts}>
                <SendIcon className="btn-icon" />
                Contact Me
              </button>
              <button className="btn projects-btn" onClick={goToProjects}>
                <CodeIcon className="btn-icon" />
                See My Projects
              </button>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={goToProjects}>
          <span>Scroll to explore</span>
          <KeyboardArrowDownIcon className="scroll-arrow" />
        </div>
      </div>
    </>
  );
}