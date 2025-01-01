import styled from "styled-components";

export const NavwrapperMain = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
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

export const SectionSideText = styled.div`
  label {
    span {
      color: #b7945c;
      font-weight: 600;
    }
    margin-bottom: 14px;
    font-size: 19px;
    letter-spacing: 12px;
    text-transform: uppercase;
    width: 100%;
    white-space: nowrap;
    animation: moveText 10s linear infinite;
  }
  @keyframes moveText {
    0% {
      transform: translateX(100%); /* Start off the screen on the right */
    }
    100% {
      transform: translateX(-100%); /* End off the screen on the left */
    }
  }
  p {
    line-height: 24px;
    font-size: 14px;
    font-weight: 300;
    color: #26282b;
  }
  h1 {
    font-size: 99px;
    font-style: italic;
    color: rgba(91, 91, 91, 0.3);
    letter-spacing: 2px;
    line-height: 42px;
    font-family: "Playfair Display", serif;
  }
  h4 {
    font-size: 30px;
    color: rgb(183, 148, 92);
    margin: 38px 0 13px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 93px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.35);
      bottom: -8px;
      left: 0;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    gap: 32px;
    margin-bottom: 18px;
    li {
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      font-size: 14px;
      font-weight: 600;
      &:after {
        position: absolute;
        content: "|";
        right: -16px;
      }
    }
  }
`;

export const ManuTextArea = styled.div`
  padding: 10px 20px;
  p {
    line-height: 24px;
    font-size: 14px;
    font-weight: 300;
    color: #26282b;
  }
  h1 {
    font-size: 75px;
    font-style: italic;
    color: rgba(131, 115, 91, 0.59);
    letter-spacing: 2px;
    line-height: 42px;
    font-family: "Playfair Display", serif;
  }
  h4 {
    font-size: 18px;
    color: #26282b;
    margin: 38px 0 13px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 93px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.35);
      bottom: -8px;
      left: 0;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    gap: 32px;
    margin-bottom: 18px;
    li {
      text-transform: uppercase;
      letter-spacing: 0px;
      position: relative;
      font-size: 11px;
      font-weight: 400;
      &:after {
        position: absolute;
        content: "|";
        right: -16px;
      }
    }
  }
`;

export const ButtonSection = styled.button`
  padding: 0;
`;

export const ClientImgWrapper = styled.div`
  img {
    background: transparent;
    filter: grayscale(1);
    padding: 2px 5px;
    transition: 0.3s;

    &:hover {
      filter: grayscale(0);
      cursor: pointer;
    }
  }
`;

export const ReviewBoxWrap = styled.div`
  div {
    position: relative;
    background: #737057;
    padding: 20px;
    height: 224px;
    display: flex;
    align-items: center;
    margin: 6px;
    z-index: 1;
    &:after {
      position: absolute;
      content: "";
      border: 1px solid rgb(0 0 0);
      left: -10px;
      width: 100%;
      height: 100%;
      top: -11px;
      z-index: 0;
    }
  }
  h6 {
    font-size: 18px;
    margin-bottom: 18px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      background: rgb(183, 148, 92);
      width: 120px;
      height: 2px;
      left: 0;
      bottom: -10px;
    }
  }
  p {
    color: #fff;
    font-size: 14px;
  }
  .up {
    position: absolute;
    right: 4%;
    bottom: 12%;
  }
  .down {
    position: absolute;
    left: 5%;
    top: 35%;
  }
`;

export const Singleheader = styled.div`
  position: relative;
  height: 280px;
  .contentWrapper {
    position: absolute;
    bottom: 0;
    padding: 0 2%;
    h6 {
      color: #b7945c;
      font-size: 34px;
    }
    p {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export const ShowcaseBox = styled.div`
  h3 {
    color: #b7945c;
    margin: 12px 0;
    font-size: 24px;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      border-bottom: 1px solid rgba(0, 0, 0, 0.35);
      width: 20%;
      bottom: -7px;
      left: 0;
    }
  }
  .boxlink {
    color: #000;
    text-decoration: unset;
  }
`;
