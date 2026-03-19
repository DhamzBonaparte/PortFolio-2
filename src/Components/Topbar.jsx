import "./Topbar.scss";
import Hero from "./Hero";
import { useRef } from "react";

export default function Topbar() {
  const scrollRef = useRef(null);

  const goToHome = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="top">
        <h2 className="top-name">Sulav Dhami</h2>
        <ul className="top-bar" type="none">
          <li>
            <a onClick={goToHome} className="top-links">
              Home
            </a>
          </li>
          <li><a href="#about" className="top-links">About</a></li>
          <li><a href="#experience" className="top-links">Experience</a></li>
          <li><a href="#skills" className="top-links">Skills</a></li>
          <li><a href="#projects" className="top-links">Projects</a></li>
          <li><a href="#contact" className="top-links">Contact</a></li>
        </ul>
      </div>
      <Hero refe={scrollRef} />
    </>
  );
}
