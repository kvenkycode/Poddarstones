import styled from "styled-components";

export const NavwrapperMain = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconswrapper {
    z-index: 1000;
  }
  .logo img {
    height: 50px;
    cursor: pointer;
  }

  .menu-icon {
    cursor: pointer;
  }

  .menu-icon img {
    height: 30px;
    width: 30px;
  }

  .sidemenu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 250px;
    height: 100vh;
    background-color: #444;
    color: white;
    padding: 20px;
    transition: all 0.3s ease-in-out;
    z-index: 999;
    overflow-y: auto;
  }

  .sidemenu.active {
    right: 0;
  }

  .sidemenu ul {
    list-style: none;
    padding: 0;
  }

  .sidemenu li {
    margin: 20px 0;
  }

  .sidemenu li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.2s ease-in-out;
  }

  .sidemenu li a:hover {
    color: #007bff;
  }
`;

export const FooterSectionDiv = styled.section`
  background: #000000;

  padding: 54px 15px 0;
  .hero_content {
    font-size: 28px;
    line-height: 38px;
    color: #fff;
  }
  .footerlinks {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .footerlinks li {
    font-size: 20px;
    line-height: 24px;
    color: #fff;
    margin-bottom: 23px;
  }
  .footersmall {
    display: flex;
    p {
      color: white;
      font-size: 12px;
      margin: 0;
      padding: 24px 0;
    }
  }
`;

export const Socailmediaicons = styled.div`
  ul {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    float: right;
    align-items: center;
    li {
      border: 2px solid #26282b;
      padding: 10px 10px;
      background-color: #3c3e41;
      a {
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const ContactSection = styled.div`
  text-align: right;
  .foothd {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #fff;
  }
  ul li {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
`;

// export const ImgblikingSection = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-around;
//   align-items: center;
// `;
export const HeroNameSection = styled.div`
  margin: 53px 0;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  h1 {
    color: #83735b;
    font-size: 105px;
    font-weight: 400;
    line-height: 92px;

    span {
      font-style: italic;
      margin-left: 23px;
    }
  }
`;
