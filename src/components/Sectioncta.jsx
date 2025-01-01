import React from "react";
import { ButtonSection } from "./styles";

const SectionCtA = ({ onLocationClick, onMoreClick }) => {
  return (
    <div>
      <ButtonSection onClick={onLocationClick} className="btn me-4">
        Location 
        <img
          src="/assets/icons/location.svg"
          alt="location icon"
          className="ms-2"
        />
      </ButtonSection>
      <ButtonSection onClick={onMoreClick} className="btn">
        More
        <img
          src="/assets/icons/more.svg"
          alt="location icon"
          className="ms-2"
        />
      </ButtonSection>
    </div>
  );
};

export default SectionCtA;
