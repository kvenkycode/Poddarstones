import React from "react";
import SectionHeadingComp from "./SectionHeading";
import Subman from "./Subman";

const Manufacture = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <SectionHeadingComp
              title="Our Manufacturing Units"
              subtitle="Find the perfect stone for your project"
              subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            />
          </div>
          <div className="col-sm-7">
            <div style={{position:"sticky",marginTop:"12px",top:"10px"}}>
            <Subman />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
