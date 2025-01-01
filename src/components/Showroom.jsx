import SectionHeadingComp from "./SectionHeading";
import "./styles"; // Ensure the styles include responsive design
import FrameTextShow from "./FrameTextShow";
import { Showrrom1 , Showrrom2} from "../utils/assets"; // Using only `Showrrom1` since `Showrrom2` isn't used
import SectionCtA from "./Sectioncta";
import { useNavigate } from "react-router-dom";
import { Showrromtxt, SecondShowroom, ThirdShowroom } from "../utils/showroomtext";

const ShowRoomComp = () => {
  const navigate = useNavigate();

  const items = [
    { val: "Italian Marble" },
    { val: "Granite" },
    { val: "Tiles" },
    { val: "Quartz" },
  ];
  const items2 = [
    { val: "Italian Marble" },
    { val: "Granite" },
    { val: "Tiles" },
    { val: "Quartz" },
  ];
   
  const items3 = [
    { val: "Granite" },
    { val: "Tiles" },
    { val: "Quartz" },
  ];
  const handleLocationClick = () => {
    navigate("/location");
  };

  const handleMoreClick = () => {
    navigate("/more");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SectionHeadingComp
              title="Our Showrooms"
              subtitle=" Find the perfect stone for your project"
              subtext=""
            ></SectionHeadingComp>
          </div>
          <div className="col-sm-6 align-self-center">
            <img
              src={Showrrom1}
              alt="Poddar Stone Gallery"
              className="img-fluid"
            />
          </div>
          <div
            className="col-sm-6 align-self-center"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <FrameTextShow
              listnumber="01."
              texthd={Showrromtxt.heading}
              items={items}
              bodytext={Showrromtxt.bodytext}
              higlighedtext={Showrromtxt.colored}
              movetext={Showrromtxt.movingtext}
            />
            <SectionCtA
              onLocationClick={handleLocationClick}
              onMoreClick={handleMoreClick}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-sm-6 align-self-center"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <FrameTextShow
              listnumber="02."
              texthd={SecondShowroom.heading}
              items={items2}
              bodytext={SecondShowroom.bodytext}
            />
            <SectionCtA
              onLocationClick={handleLocationClick}
              onMoreClick={handleMoreClick}
            />
          </div>
          <div className="col-sm-6 align-self-center">
            <img
              src={Showrrom2}
              alt="Poddar Stone Gallery"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 align-self-center">
            <img
              src={Showrrom1}
              alt="Poddar Stone Gallery"
              className="img-fluid"
            />
          </div>
          <div
            className="col-sm-6 align-self-center"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <FrameTextShow
              listnumber="03."
              texthd={ThirdShowroom.heading}
              items={items3}
              bodytext={ThirdShowroom.bodytext}
            />
            <SectionCtA
              onLocationClick={handleLocationClick}
              onMoreClick={handleMoreClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowRoomComp;
