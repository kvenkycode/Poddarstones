import { images } from "../utils/assets";
import SectionHeadingComp from "./SectionHeading";
import { ReviewBox, ReviewBoxWrap } from "./styles";

const ReviewSection = () => {
  const ReviewText = [
    {
      clientname: "John",
      clientreview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      clientname: "Doe",
      clientreview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text.",
    },
    {
      clientname: "Wilsan",
      clientreview:
        "And typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <>
      <div
        className="row d-flex"
        style={{
          alignItems: "stretch",
        }}
      >
        <div className="col-sm-12">
          <SectionHeadingComp
            title="Love from you"
            subtitle=""
            subtext=""
          ></SectionHeadingComp>
        </div>

        {ReviewText.map((clientr, index) => (
          <ReviewBoxWrap key={index} className="col-sm-4">
            <div>
              <section>
                <img
                  src={images.quotesDown}
                  alt="Quotes Down"
                  className="down"
                />
                <h6>{clientr.clientname}</h6>
                <p>{clientr.clientreview}</p>
                <img src={images.quotesUp} alt="Quotes Up" className="up" />
              </section>
            </div>
          </ReviewBoxWrap>
        ))}
      </div>
    </>
  );
};

export default ReviewSection;
