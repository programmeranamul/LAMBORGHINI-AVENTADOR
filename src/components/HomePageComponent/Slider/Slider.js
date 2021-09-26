import React from "react";
import style from "./Slider.module.css";
import img1 from "./../../../images/car3.jpg";
import img2 from "./../../../images/car2.jpg";
import { Carousel } from "react-bootstrap";
import SliderCaption from "./SliderCaption";

const sliderImage = [img1, img2];

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        {sliderImage.map((slider, key) => (
          <Carousel.Item key={key} interval={20000} className={style.slider}>
            <img className="d-block w-100" src={slider} alt="First slide" />
            <SliderCaption />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;