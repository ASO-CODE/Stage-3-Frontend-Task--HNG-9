import React from "react";
import "./LearnMore.css";
import LMImg from "../../assets/Collage.png";
const LearnMore = () => {
  return (
    <section id="LM">
      <div className="LM-info">
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button type="button" className="LM-btn">Learn more</button>
      </div>
      <div className="LM-img">
        <img src={LMImg} alt="Img" />
      </div>
    </section>
  );
};

export default LearnMore;
