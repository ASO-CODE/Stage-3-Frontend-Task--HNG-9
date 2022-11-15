import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Filter from "../../components/Filter/Filter";
import Nfts from "../../components/Nfts-PTS/Nfts";
const Place = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <Nfts />
      <Footer />
    </>
  );
};

export default Place;
