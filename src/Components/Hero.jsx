import "./Hero.scss";
import heroPic from "../assets/pic.png";

export default function Hero({ refe }) {
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
            <button className="btn contact-btn">Contact Me</button>
            <button className="btn projects-btn">See My Projects</button>
          </div>
        </div>
      </div>
    </>
  );
}
