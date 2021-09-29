import React from "react";
import { Form } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./Slider.module.css";
import logo from "./../../../images/logo.png";

const SliderCaption = () => {
  return (
    // <Carousel.Caption
    //   className={`d-flex justify-content-center flex-column h-100 w-100  ${style.slider__caption}`}
    // >
    <>
      <div className={`mb-3 ${style.content_container}`}>
        <img src={logo} alt="" className={style.slider_logo} />
        <h2 className={`text-uppercase mb-0 text-white`}>
          lamborghini aventador
        </h2>
        <p className={`text-uppercase text-white m-0 ${style.small}`}>
          Lims Suma klakn car
        </p>
        <p className="px-4 text-white">
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
      <div>
        <div className="mb-4 text-center">
          <p className={style.btn}>
            <span className="text-white">lorem Ipsam</span>{" "}
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className={`${style.exhaust_container} px-3`}>
          <div className={style.exhaust}>
            <div>
              <p className={"text-uppercase text-white me-4 mb-3 mb-md-0"}>
                find your exhaust:
              </p>
            </div>
            <div className={style.select}>
              <Form.Select className={"text-uppercase"}>
                <option>BRAND</option>
                <option>Default select</option>
              </Form.Select>
              <Form.Select className={"text-uppercase"}>
                <option>Model</option>
                <option>Default select</option>
              </Form.Select>
              <Form.Select className={"text-uppercase"}>
                <option>Year</option>
                <option>2021</option>
              </Form.Select>
            </div>
            <div>
              <MdKeyboardArrowRight
                className={`${style.arrow} text-white mt-3 mt-md-0`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
    // </Carousel.Caption>
  );
};

export default SliderCaption;
