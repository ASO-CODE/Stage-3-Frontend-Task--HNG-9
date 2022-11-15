import React from "react";
import "./Partners.css";
import MBToken from "../../assets/MBToken Img.svg";
import MetaMask from "../../assets/MetaMask Img.svg";
import OpenSea from "../../assets/OpenSea Img.svg";

const Partners = () => {
  return (
    <section id="partners">
      <img src={MBToken} alt="partner Img" />
      <img src={MetaMask} alt="partner Img" />
      <img src={OpenSea} alt="partner Img" />
    </section>
  );
};

export default Partners;
