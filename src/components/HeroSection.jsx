import heroImages from "../utils/herosectiondata";
import { HeroNameSection } from "./styles";

const HeroSliderSection = () => {
  return (
    <>
      <div className="sectionwrapper p-0">
        <HeroNameSection>
          <h1>luxury </h1>
          <h1>
            in
            <span>Stone</span>
          </h1>
        </HeroNameSection>

        <div className="container-fluid">
          <div className="row">
            {heroImages.map((heroimg) => (
              <div className="col-sm-3">
                <img
                  src={heroimg.imgsrc}
                  alt={heroimg.alttext}
                  className="responsive-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSliderSection;
