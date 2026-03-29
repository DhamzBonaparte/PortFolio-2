import "./Topbar.scss";
import Hero from "./Hero";
import { useRef, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import About from "./About";
import Skills from "./Skiills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Topbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });

  const goToHome = () => {
    homeRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const goToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToContacts = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <li className="top-links" onClick={goToContacts}>
            Contact <ContactPhoneIcon className="icon"></ContactPhoneIcon>
          </li>
        </ul>
      </div>
      <Hero refe={homeRef} />
      <About refe={aboutRef}></About>
      <Skills refe={skillsRef}></Skills>
      <Projects refe={projectRef} />
      <Contact refe={contactRef} />
      <Footer/>
    </>
  );
}
