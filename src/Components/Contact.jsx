import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  HourglassTop as HourglassIcon,
} from "@mui/icons-material";
import "./Contact.scss";

const Contact = ({ refe }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // { type: "sending"|"success"|"error", text: string }

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ type: "sending", text: "Sending your message..." });

    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setStatus({ type: "success", text: "Message Sent! Thank you for reaching out." });
          e.target.reset();
          setFullName("");
          setEmail("");
          setMessage("");

          // Clear after 4 seconds
          setTimeout(() => setStatus(null), 2000);
        })
        .catch((error) => {
          setStatus({ type: "error", text: "Oops! Something went wrong while sending." });
          console.error("Error sending email:", error.text);

          setTimeout(() => setStatus(null), 2000);
        });
    } catch (err) {
      setStatus({ type: "error", text: "Unexpected error. Please try again later." });
      console.error("Unexpected error:", err);

      setTimeout(() => setStatus(null), 2000);
    }
  };

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
              <a
                href="https://github.com/DhamzBonaparte"
                target="_blank"
                className="link-item"
              >
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
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Your Message</label>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="How can I help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                SEND MESSAGE{" "}
                <SendIcon
                  sx={{ fontSize: 18, ml: 1 }}
                  style={{
                    color: "black",
                    backgroundColor: "inherit",
                  }}
                />
              </button>

              {/* Status message */}
              {status && (
                <div className={`status-message ${status.type}`}>
                  {status.type === "sending" && <HourglassIcon sx={{ mr: 1 }} />}
                  {status.type === "success" && <CheckCircleIcon sx={{ mr: 1 }} />}
                  {status.type === "error" && <ErrorIcon sx={{ mr: 1 }} />}
                  <span>{status.text}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
