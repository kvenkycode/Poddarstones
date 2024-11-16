import { NavwrapperMain } from "./styles";
import { images } from "../utils/assets";
import { useState } from "react";

const NavBar = () => {
const [showicon, setshowicon ] = useState(false)

const ClicToOpen = () => {
    console.log("buttons clicked");

    
}

  return (
    <>
      <NavwrapperMain>
        <div>
          <img src={images.mainLogo} alt="" />
        </div>
        <div onClick={ClicToOpen}>
          <img src={images.openMenu} alt="" id=""/>
          <img src={images.closeMenu} alt="" />
        </div>
      </NavwrapperMain>
    </>
  );
};

export default NavBar;
