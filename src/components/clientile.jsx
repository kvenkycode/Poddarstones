import { images } from "../utils/assets";
import SectionHeadingComp from "./SectionHeading";
import { ClientImgWrapper } from "./styles";
const ClientList = () => {
  const clientImages = [
    { src: images.artlab, alt: "Artlab" },
    { src: images.Wonderla, alt: "Wonderla" },
    { src: images.Rgi, alt: "RGI" },
    { src: images.Ramoji, alt: "Ramoji" },
    { src: images.Railways, alt: "Railways" },
    { src: images.Hetro, alt: "Hetro" },
    { src: images.Drdo, alt: "DRDO" },
    { src: images.Dhanturi, alt: "Dhanturi" },
  ];

  return (
    <>
    
<div className="container">
    <div className="row">
        <div className="col-sm-12">
        <SectionHeadingComp
              title="Clients"
              subtitle=""
              subtext=""
            ></SectionHeadingComp>

        <div className="d-flex align-items-center justify-content-between">
        {clientImages.map((client, index) => (
          <ClientImgWrapper key={index}>
            <img src={client.src} alt={client.alt} className="client-logo" />
          </ClientImgWrapper>
        ))}
      </div>
        </div>
    </div>
</div>

     
    </>
  );
};

export default ClientList;
