import React from "react";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  ArrowUpward as ArrowUpIcon,
} from "@mui/icons-material";
import "./footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo">
              SD<span>.</span>
            </h2>
            <p>Building digital experiences with precision and passion.</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/DhamzBonaparte"
              target="_blank"
              aria-label="GitHub"
              className="social-icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sulav-dhami/"
              target="_blank"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Sulav Dhami. All rights reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUpIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
