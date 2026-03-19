import "./Topbar.scss";
import Hero from "./Hero";
import { useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AvTimerIcon from '@mui/icons-material/AvTimer';

export default function Topbar() {
  const scrollRef = useRef(null);

  const goToHere = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="top">
        <h2 className="top-name">Sulav Dhami</h2>
        <ul className="top-bar" type="none">
          <li onClick={goToHere} className="top-links">
            Home <HomeIcon className="icon" />
          </li>
          <li className="top-links">
            About <InfoIcon className="icon"></InfoIcon>
          </li>
          <li className="top-links">Experience <AvTimerIcon className="icon"></AvTimerIcon></li>
          <li className="top-links">
            Skills <ConstructionIcon className="icon"></ConstructionIcon>
          </li>
          <li className="top-links">
            Projects <AccountTreeIcon className="icon"></AccountTreeIcon>
          </li>
          <li className="top-links">Contact <ContactPhoneIcon className="icon"></ContactPhoneIcon></li>
        </ul>
      </div>
      <Hero refe={scrollRef} />
    </>
  );
}
