import React from "react";
import style from "./Slider.module.css";
import img1 from "./../../../images/car3.jpg";
import img2 from "./../../../images/car2.jpg";
import { Carousel } from "react-bootstrap";
import SliderCaption from "./SliderCaption";
import video from "./../../../video/home_banner.mov";

const sliderImage = [img1, img2];

const Slider = () => {
  return (
    <div>
      <div className="d-block d-md-none">
        <Carousel fade>
          {sliderImage.map((slider, key) => (
            <Carousel.Item key={key} interval={20000} className={style.slider}>
              <img
                className={`${style.slider_bg_img} d-block w-100`}
                src={slider}
                alt="First slide"
              />
              <Carousel.Caption
                className={`d-flex justify-content-center flex-column h-100 w-100  ${style.slider__caption}`}
              >
                <SliderCaption />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={`d-none d-md-block ${style.video_container} `}>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className={style.video}
          poster={img1}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          className={`${style.large_view} d-flex justify-content-center flex-column h-100 w-100 align-items-center`}
        >
          <SliderCaption />
        </div>
      </div>
    </div>
  );
};

export default Slider;
