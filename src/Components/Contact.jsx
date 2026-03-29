import React from "react";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import "./Contact.scss";

const Contact = ({refe}) => {
  return (
    <section className="contact-section" ref={refe}>
      <div className="container">
        <header className="header">
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </header>

        <div className="content-grid">
          {/* Info Side */}
          <div className="info-side">
            <div className="text-content">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="social-links">
              <a className="link-item">
                <div className="icon-box">
                  <EmailIcon sx={{ fontSize: 20 }} />
                </div>
                <span>sulavdhami420@gmail.com</span>
              </a>
              <a href="https://github.com/DhamzBonaparte"
              target="_blank"
               className="link-item">
                <div className="icon-box">
                  <GitHubIcon sx={{ fontSize: 20 }} />
                </div>
                <span>github.com/DhamzBonaparte</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sulav-dhami/"
                className="link-item"
                target="_blank"
              >
                <div className="icon-box">
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </div>
                <span>linkedin/sulav-dhami</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="input-group">
                <label>Your Message</label>
                <textarea rows="6" placeholder="How can I help you?"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                SEND MESSAGE <SendIcon sx={{ fontSize: 18, ml: 1 }} style={{
                    'color':'black',
                    'background-color':'inherit'
                }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
