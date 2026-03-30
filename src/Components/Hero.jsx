import "./Hero.scss";
import heroPic from "../assets/pic.png";
import { useRef, useEffect } from "react";


export default function Hero({ refe,proRef,contRef }) {
  const goToContacts = () => {
    contRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToProjects = () => {
    proRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="hero" ref={refe}>
        <div className="left">
          <img src={heroPic} alt="Profile_image" className="floating-img" />
        </div>
        <div className="right">
          <h1 className="title pop-up-text">
            I am <span>Sulav Dhami</span>
          </h1>
          <p className="subtitle pop-up-text-delay">
            A developer skilled in{" "}
            <strong style={{ color: "#FFD43B" }}>Python</strong> and the{" "}
            <strong style={{ color: "#47A248" }}>
              MERN <span style={{ color: "white" }}>stack</span>
            </strong>
            , creating efficient applications with clean design and robust
            functionality.
          </p>
          <div className="button-container pop-up-text-delay2">
            <button className="btn contact-btn" onClick={goToContacts}>
              Contact Me
            </button>
            <button className="btn projects-btn" onClick={goToProjects}>
              See My Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
