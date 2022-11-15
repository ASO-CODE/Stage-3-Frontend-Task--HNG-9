import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";
import Nfts from "../../components/Nfts/Nfts";
import LearnMore from "../../components/LearnMore/LearnMore";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Nfts />
      <LearnMore />
      <Footer/>
    </>
  );
};

export default Home;
