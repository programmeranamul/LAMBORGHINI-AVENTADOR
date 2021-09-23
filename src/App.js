import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import SecondSection from "./components/second-section/SecondSection";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Slider />
      <MenuBar />
      <SecondSection />
    </div>
  );
}

export default App;
