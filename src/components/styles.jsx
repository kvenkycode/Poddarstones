import styled from "styled-components";

export const NavwrapperMain = styled.section`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
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
