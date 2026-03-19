import "./Hero.scss";
import heroPic from "../assets/pic.png";

export default function Hero({ refe }) {
  return (<>
    <div className="hero" ref={refe}>
      <div className="left">
        <img src={heroPic} alt="Profile_image" />
      </div>
      <div className="right">
        <h1 className="title">
          I am <span>Sulav Dhami</span>
        </h1>
        <p className="subtitle">
          A developer skilled in{" "}
          <strong style={{ color: "#FFD43B" }}>Python</strong> and the{" "}
          <strong style={{ color: "#47A248" }}>
            MERN <span style={{ color: "white" }}>stack</span>
          </strong>
          , creating efficient applications with clean design and robust
          functionality.
        </p>
      </div>
    </div>
    </>
  );
}
