import React from "react";
import "./Nfts.css";
import data from "./data";
import like from "../../assets/heart.svg";
import rating from "../../assets/Star 2.svg";

const Nfts = () => {
  return (
    <section id="nfts">
      <div className="nfts-container">
        {data.map((singleCard, index) => {
          const { img, name, price, distance, duration } = singleCard;
          return (
            <article key={index} className="nft-item">
              <div className="nft-item-img">
                <img src={img} alt={name} />
                <img src={like} className="like-btn" alt="like-btn" />
              </div>
              <div className="nft-details-1">
                <p>{name}</p>
                <p>{price}</p>
              </div>
              <div className="nft-details-2">
                <p>{distance}</p>
                <p>{duration}</p>
              </div>
              <div className="nft-rating">
                <img src={rating} alt="rating" />
                <img src={rating} alt="rating" />
                <img src={rating} alt="rating" />
                <img src={rating} alt="rating" />
                <img src={rating} alt="rating" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Nfts;
