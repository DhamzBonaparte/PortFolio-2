import "./Topbar.scss";
import Hero from "./Hero";
import { useRef, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goToHome = () => {
    homeRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const goToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsMenuOpen(false);
  };

  const goToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsMenuOpen(false);
  };

  const goToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const goToContacts = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="top">
        <h2 className="top-name">Sulav Dhami</h2>
        
        {/* Desktop Navigation */}
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

        {/* Hamburger Menu Button - Mobile Only */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon className="hamburger-icon" /> : <MenuIcon className="hamburger-icon" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <ul className="mobile-menu-list">
          <li onClick={goToHome} className="mobile-menu-item">
            <HomeIcon className="mobile-menu-icon" />
            Home
          </li>
          <li onClick={goToAbout} className="mobile-menu-item">
            <InfoIcon className="mobile-menu-icon" />
            About
          </li>
          <li onClick={goToSkills} className="mobile-menu-item">
            <ConstructionIcon className="mobile-menu-icon" />
            Skills
          </li>
          <li onClick={goToProjects} className="mobile-menu-item">
            <AccountTreeIcon className="mobile-menu-icon" />
            Projects
          </li>
          <li onClick={goToContacts} className="mobile-menu-item">
            <ContactPhoneIcon className="mobile-menu-icon" />
            Contact
          </li>
        </ul>
      </div>

      <Hero refe={homeRef} proRef={projectRef} contRef={contactRef} />
      <About refe={aboutRef}></About>
      <Skills refe={skillsRef}></Skills>
      <Projects refe={projectRef} />
      <Contact refe={contactRef} />
      <Footer/>
    </>
  );
}