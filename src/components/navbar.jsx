import { NavwrapperMain } from "./styles";
import { images } from "../utils/assets";
import menuData from "../utils/menuitems";
import { useState } from "react";

const NavBar = () => {
  const [showicon, setshowicon] = useState(false);

  const ClicToOpen = () => {
    setshowicon(!showicon);

    console.log("buttons clicked");
  };

  return (
    <>
      <NavwrapperMain>
        <div>
          <img src={images.mainLogo} alt="" />
        </div>

        <div onClick={ClicToOpen} className="iconswrapper">
          {showicon ? (
            
            <img src={images.closeMenu} alt="" />
          ) : (
            <img src={images.openMenu} alt="" id="" />
          )}
        </div>

        <div className={`sidemenu ${showicon ? "active" : ""}`}>
          <ul>
            {menuData.map((item) => (
              <li key={item.id}>
                <a href={`${item.key}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </NavwrapperMain>
    </>
  );
};

export default NavBar;
