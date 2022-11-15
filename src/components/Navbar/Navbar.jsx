import React, { useState, useRef, useEffect } from "react";
import CLOSE from "../../assets/close.svg";
import OPEN from "../../assets/open.svg";
import logo from "../../assets/Header Logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? (
              <img src={CLOSE} alt="open icon" />
            ) : (
              <img src={OPEN} alt="close icon" />
            )}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div className="links" ref={linksRef}>
            <ul className="page-links">
              <Link to="/" className="link">
                <li>
                  <a href="/">Home</a>
                </li>
              </Link>
              <Link to="/place" className="link">
                <li>
                  <a href="/place">Place to stay</a>
                </li>
              </Link>
              <Link to="/nfts" className="link">
                <li>
                  <a href="/nfts">NFTs</a>
                </li>
              </Link>
              <Link to="/community" className="link">
                <li>
                  <a href="/community">Community</a>
                </li>
              </Link>
            </ul>
            <button type="button" className="header-btn">
              Connect wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
