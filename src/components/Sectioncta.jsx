import React from "react";

const SectionCtA = ({ onLocationClick, onMoreClick }) => {
  return (
    <div>
      <button onClick={onLocationClick} className="btn">
        Location 
        <img
          src="/assets/icons/location.svg"
          alt="location icon"
          className="ms-2"
        />
      </button>
      <button onClick={onMoreClick} className="btn">
        More
        <img
          src="/assets/icons/more.svg"
          alt="location icon"
          className="ms-2"
        />
      </button>
    </div>
  );
};

export default SectionCtA;
