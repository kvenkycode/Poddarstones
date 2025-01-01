// src/pages/Home.js
import React from "react";
import HeroSliderSection from "../components/HeroSection";
import "./styles.css";
import SectionCtA from "../components/Sectioncta";
import { useNavigate } from "react-router-dom";
import ShowRoomComp from "../components/Showroom";
import Manufacture from "../components/Manufacture";
import ClientList from "../components/clientile";
import ReviewSection from "../components/reviews";
import { images } from "../utils/assets";

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
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h1 className="videoplayhd">
                  Your journey to stunning <br />
                  interiors begins here — <br />
                  watch our stone gallery showcase!
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
      <div className="sectionwrapper">
        <div className="smallheadtitle">SHOWROOMS</div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="">
                <ShowRoomComp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionwrapper" style={{ background: "#F6F6F6" }}>
        <div className="smallheadtitle">Manufacture</div>
        <Manufacture />
      </div>

      <div className="sectionwrapper" style={{ background: "#fff" }}>
        <div className="smallheadtitle">Manufacture</div>
        <p>slider</p>
      </div>
      <div className="sectionwrapper" style={{ background: "#F6F6F6" }}>
        <div className="smallheadtitle">Our Clients</div>
        <ClientList />
      </div>
      <div
        className="sectionwrapper"
        style={{
          alignItems: "stretch",
          padding:"40px 0",
          background: "#fff",
          backgroundImage: `url(${images.reviewsBackground})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat",
          margin:"4% 0",
        }}
      >
        <div className="container">
          <div className="col-sm-12">
            <div className="smallheadtitle">REVIEWS</div>
          </div>

          <ReviewSection />
        </div>
      </div>
    </>
  );
};

export default Home;
