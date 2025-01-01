import React from "react";
import { SectionSideText } from "./styles";
const FrameTextShow = ({ listnumber, texthd, items, bodytext, movetext, higlighedtext }) => {
  return (
    <SectionSideText>
      <h1>{listnumber}</h1>
      <h4>{texthd}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.val}</li>
        ))}
      </ul>
      <p>{bodytext}</p>
      <label> <span>{higlighedtext}</span> {movetext}</label>
    </SectionSideText>
  );
};

export default FrameTextShow;




 