import React from "react";
import { ManuTextArea } from "./styles";

const ManuText = ({ listnumber, texthd, labelitems, bodytext }) => {
  return (
    <ManuTextArea>
      <h1>{listnumber}</h1>
      <h4>{texthd}</h4>
      <ul>
        {labelitems.map((item, index) => (
          <li key={index}>{item.val}</li>
        ))}
      </ul>
      <p>{bodytext}</p>
    </ManuTextArea>
  );
};

export default ManuText;
