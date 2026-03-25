import "./Topbar.scss";
import Hero from "./Hero";
import { useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import About from "./About";
import Skills from "./Skiills";
import Projects from "./Projects";

export default function Topbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null)


  const goToHome = () => {
    homeRef.current.scrollIntoView({ block: "center"  ,behavior: "smooth"});
  };

  const goToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

    const goToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className="top">
        <h2 className="top-name">Sulav Dhami</h2>
        <ul className="top-bar" type="none">
          <li onClick={goToHome} className="top-links">
            Home <HomeIcon className="icon" />
          </li>
          <li className="top-links" onClick={goToAbout}>
            About <InfoIcon className="icon"></InfoIcon>
          </li>
          <li className="top-links" onClick={goToSkills}>
            Skills <ConstructionIcon className="icon"></ConstructionIcon>
          </li>
          <li className="top-links" onClick={goToProjects}>
            Projects <AccountTreeIcon className="icon"></AccountTreeIcon>
          </li>
          <li className="top-links">
            Contact <ContactPhoneIcon className="icon"></ContactPhoneIcon>
          </li>
        </ul>
      </div>
      <Hero refe={homeRef} />
      <About refe={aboutRef}></About>
      <Skills refe={skillsRef}></Skills>
      <Projects refe={projectRef}/>
    </>
  );
}
