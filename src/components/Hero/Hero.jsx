import React from "react";
import "./Hero.css"
import HeroImg from "../../assets/Group 4028.png"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-info">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="hero-input">
          <input type="text" name="" id="" placeholder="Search for location" />
          <button type="button">Search</button>
        </div>
          </div>
          <div className="hero-img">
              <img src={HeroImg} alt="hero Img" />
          </div>
    </section>
  );
};

export default Hero;
