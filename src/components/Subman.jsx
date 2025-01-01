import React from "react";
import ManuText from "./ManufactText";
import { manufImgOne } from "../utils/assets";
import {
  ManufactureOne,
  ManufactureTwo,
  ManufactureThree,
} from "../utils/showroomtext";
import SectionCtA from "./Sectioncta";
import { useNavigate } from "react-router-dom";
const Subman = () => {
  const navigate = useNavigate();
  const labelitems1 = [
    { val: "GRANITE - POLISHED" },
    { val: "LAPOTRA FINISH" },
    { val: "LEATHER FINISH " },
  ];
  const labelitems2 = [
    { val: "GRANITE - POLISHED" },
    { val: "LAPOTRA FINISH" },
    { val: "LEATHER FINISH " },
  ];
  const labelitems3 = [
    { val: "GRANITE - POLISHED" },
    { val: "LAPOTRA FINISH" },
    { val: "LEATHER FINISH " },
  ];
  const handleLocationClick = () => {
    navigate("/location");
  };

  const handleMoreClick = () => {
    navigate("/more");
  };
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ width: "50%" }}>
          <ManuText
            listnumber="01."
            texthd={ManufactureOne.texthd}
            labelitems={labelitems1}
            bodytext={ManufactureOne.bodytext}
          />
        </div>
        <div style={{ width: "50%" }}>
          <img src={manufImgOne} alt="" className="img-fluid" />
          <SectionCtA
            onLocationClick={handleLocationClick}
            onMoreClick={handleMoreClick}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div style={{ width: "50%" }}>
          <img src={manufImgOne} alt="" className="img-fluid" />
          <SectionCtA
            onLocationClick={handleLocationClick}
            onMoreClick={handleMoreClick}
          />
        </div>
        <div style={{ width: "50%" }}>
          <ManuText
            listnumber="02."
            texthd={ManufactureTwo.texthd}
            labelitems={labelitems2}
            bodytext={ManufactureTwo.bodytext}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div style={{ width: "50%" }}>
          <ManuText
            listnumber="03."
            texthd={ManufactureThree.texthd}
            labelitems={labelitems3}
            bodytext={ManufactureThree.bodytext}
          />
        </div>
        <div style={{ width: "50%" }}>
          <img src={manufImgOne} alt="" className="img-fluid" />
          <SectionCtA
            onLocationClick={handleLocationClick}
            onMoreClick={handleMoreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Subman;
