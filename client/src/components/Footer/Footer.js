import "./Footer.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="moto">
          <h1>"One Stop Shop for all things Student Life"</h1>
        </div>
        All Rights Reserved &copy; 2021 &#8226;
        <a
          href="https://github.com/Angel-Sky/ReactJS-Project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
