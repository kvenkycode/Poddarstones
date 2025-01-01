import React from "react";
import {ShowcaseBox} from "./styles";

const ImageBoxCom = ({ image, heading, link }) => {
  return (
    <ShowcaseBox>
      <img src={image} alt={heading} className="img-fluid" />
      <h3 className="boxheading">{heading}</h3>
      <a href={link} className="boxlink">
        More <img src="/assets/icons/more.svg" /> 
      </a>
    </ShowcaseBox>
  );
};

export default ImageBoxCom;
