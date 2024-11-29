// src/pages/Home.js
import React from "react";
import HeroSliderSection from "../components/HeroSection";
import "./styles.css";
import SectionCtA from "../components/Sectioncta";
import { useNavigate } from "react-router-dom"; // React Router Hook

const Home = () => {
  const navigate = useNavigate();

  const handleLocationClick = () => {
    navigate("/location");
  };

  const handleMoreClick = () => {
    navigate("/more");
  };
  return (
    <>
      <HeroSliderSection />
      <div className="sectionwrapper videobg">
        <div className="smallheadtitle">PODDAR STONES</div>
        <div className="px-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <h1 className="videoplayhd">
                Your journey to stunning <br/>interiors begins here — <br/>watch our stone gallery showcase!
                </h1>

                <SectionCtA
                  onLocationClick={handleLocationClick}
                  onMoreClick={handleMoreClick}
                />
              </div>
              <div className="col-sm-7">
                <img
                  src="assets/homepage/videoplay.jpg"
                  alt="video play image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
