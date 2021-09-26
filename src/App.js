import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import Slider from "./components/HomePageComponent/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Tstimonial from "./components/HomePageComponent/Testimonial/Tstimonial";
import NewAndBestSellerProduct from "./components/HomePageComponent/NewAndBestSellerProduct/NewAndBestSellerProduct";
import SecondSection from "./components/HomePageComponent/second-section/SecondSection";
import OurProducts from "./components/HomePageComponent/OurProducts/OurProducts";
import ProcessSystem from './components/HomePageComponent/ProcessSystem/ProcessSystem';

function App() {
  return (
    <div className="app">
      <Slider />
      <MenuBar />
      <SecondSection />
      <Tstimonial />
      <OurProducts />
      <NewAndBestSellerProduct />
      <ProcessSystem />
      
      <Footer />
    </div>
  );
}

export default App;
