import { images } from "../utils/assets";
import { FooterSectionDiv,Socailmediaicons,ContactSection } from "./styles";
import socialMediaData from "../utils/socailmedia";
const FooterSection = () => {
  return (
    <>
      <FooterSectionDiv>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer_hero">
                <img src={images.mainLogo} alt="Poddar Stones Logo" />
                <p className="hero_content mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex justify-content-around">
                <ul className="footerlinks">
                  <li>Home</li>
                  <li>Our Showrooms</li>
                  <li>out Mfg Units</li>
                  <li>Gallery</li>
                  <li>Blogs</li>
                </ul>
                <ul className="footerlinks">
                  <li>Italian</li>
                  <li>Quartz</li>
                  <li>Granite</li>
                  <li>Gallery</li>
                  <li>Tiles</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <ContactSection>
                <p className="foothd">Contact</p>
                <ul className="mb-5">
                  <li>+91 234324 4322</li>
                  <li>poddarstones@gmail.com</li>
                </ul>
                <Socailmediaicons>
                  <ul>
                    {socialMediaData.map((iconsdata) => (
                      <li>
                        <a
                          key={iconsdata.id}
                          href={iconsdata.name}
                          target="_blank"
                        >
                          <img src={iconsdata.imgSrc} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Socailmediaicons>
              </ContactSection>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
                <div className="footersmall">
                <p>@ 2024 Copy right  </p>
                </div>
            </div>
          </div>
        </div>
      </FooterSectionDiv>
    </>
  );
};

export default FooterSection;
