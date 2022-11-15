import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/Footer Logo.svg";
import Facebook from "../../assets/facebook-263-721950.svg";
import Instagram from "../../assets/instagram-216-721958.svg";
import Twitter from "../../assets/twitter-241-721979.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <article className="sec-1">
          <img src={FooterLogo} className="footer-logo" alt="footer logo" />
          <div className="socials">
            <img src={Facebook} alt="Facebook Icon" />
            <img src={Instagram} alt="Instagram Icon" />
            <img src={Twitter} alt="Twitter Icon" />
          </div>
        </article>
        <article className="sec-2">
          <h1>Community</h1>
          <ul>
            <li>
              <a href="/">NFT</a>
            </li>
            <li>
              <a href="/">Tokens</a>
            </li>
            <li>
              <a href="/">Landlords</a>
            </li>
            <li>
              <a href="/">Discord</a>
            </li>
          </ul>
        </article>
        <article className="sec-3">
          <h1>Places</h1>
          <ul>
            <li>
              <a href="/">Castle</a>
            </li>
            <li>
              <a href="/">Farms</a>
            </li>
            <li>
              <a href="/">Beach</a>
            </li>
            <li>
              <a href="/">Learn more</a>
            </li>
          </ul>
        </article>
        <article className="sec-4">
          <h1>About us</h1>
          <ul>
            <li>
              <a href="/">Road map</a>
            </li>
            <li>
              <a href="/">Creators</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </article>
      </div>
      <div className="footer-copyright">
        <small>
          &copy; <span id="date">{new Date().getFullYear()}</span> Metabnb
        </small>
      </div>
    </footer>
  );
};

export default Footer;
