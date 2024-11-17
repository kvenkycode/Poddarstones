import logo from "./logo.svg";
import "./App.css";
import ThemeLayourConatiner from "./pages/layout";
import { Router, Route, Routes } from "react-router-dom";
import Quartz from "./pages/quartz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ThemeLayourConatiner />}></Route>
        <Route path="/quartz" element={<Quartz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
