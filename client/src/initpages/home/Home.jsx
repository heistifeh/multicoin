import React from "react";
import Header from "./Header";
import Nerdwallet from "./Nerdwallet";
import Assets from "./Assets";
import Features from "./Features";
import Alpha from "./Alpha";
import Upsell from "./Upsell";
import Footer from "./Footer";
import Navbar from "../../components/Navbar"
const Home = () => {
  return (
    <>
      <div className="container-all">
        <Navbar />
        <Header />
        
        <Footer />
      </div>
    </>
  );
};

export default Home;
