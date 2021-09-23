import React from "react";
import WelcomeTitle from "./WelcomeTitle";
import style from "./seconSection.module.css";
import CarClub from "./CarClub";
import Products from "./Products";
import FearuredProducts from "../FeaturedProduct/FeaturedProducts";

const SecondSection = () => {
  return (
    <div className={`${style.section} pb-5 pt-3`}>
      <div className="container">
        <WelcomeTitle />
        <CarClub />
        <Products />
        <FearuredProducts />
      </div>
    </div>
  );
};

export default SecondSection;
