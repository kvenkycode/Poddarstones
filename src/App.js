// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/Navbar"; 
import "./App.css";
import FooterSection from "./components/footer";

const App = () => {
  useEffect(() => {
    console.log("rendering component app");
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterSection />
    </div>
  );
};

export default App;
