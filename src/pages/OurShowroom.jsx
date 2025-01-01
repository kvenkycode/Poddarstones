import ImageBoxCom from "../components/ImageBox";
import SectionHeadingComp from "../components/SectionHeading";
import ShowRoomComp from "../components/Showroom";
import SingleHeaderComp from "../components/SinglePageHeader";
import { images } from "../utils/assets";
import "./styles.css";
import { boxData, smallShowRoom } from "../utils/mockdata";

const OurShowroomComp = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    // { label: "Services", link: "/services" },
    { label: "Our Showroom", link: null }, // Current page, no link
  ];
  return (
    <>
      <SingleHeaderComp
        backgroundImage={images.Singleheader}
        heading="Our Showroom"
        body="We provide top-notch web development services tailored to your business needs."
        breadcrumbs={breadcrumbs}
      />
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
      <div className="sectionwrapper">
        <div className="smallheadtitle">Manufacture</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <SectionHeadingComp
                title="Our showcase"
                subtitle=""
                subtext=""
              ></SectionHeadingComp>
            </div>
          </div>
          <div className="box-list row">
            {boxData.map((box, index) => (
              <div className="col-sm-3">
                <ImageBoxCom
                  key={index}
                  image={box.image}
                  heading={box.heading}
                  link={box.link}
                />
              </div>
            ))}
          </div>
          <div className="box-list row">
            {smallShowRoom.map((box, index) => (
              <div className="col-sm-4">
                <ImageBoxCom
                  key={index}
                  image={box.image}
                  heading={box.heading}
                  link={box.link}
                />
              </div>
            ))}
          </div>

  </div>
      </div>
    </>
  );
};
export default OurShowroomComp;
