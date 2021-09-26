import React from "react";
import { Carousel, Form } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./Slider.module.css";
import logo from "./../../../images/logo.png";

const SliderCaption = () => {
  return (
    <Carousel.Caption
      className={`d-flex justify-content-center flex-column h-100 w-100  ${style.slider__caption}`}
    >
      <div className="mb-3">
        <img src={logo} alt="" />
        <h2 className={`text-uppercase mb-0 `}>lamborghini aventador</h2>
        <p className={`text-uppercase m-0 ${style.small}`}>
          Lims Suma klakn car
        </p>
        <p className="px-4">
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
      <div>
        <div className="mb-4 ">
          <p className={style.btn}>
            <span>lorem Ipsam</span> <MdKeyboardArrowRight />
          </p>
        </div>
        <div className={`${style.exhaust_container} px-3`}>
          <div className={style.exhaust}>
            <div>
              <p className={"text-uppercase me-4 mb-3 mb-md-0"}>
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
              <MdKeyboardArrowRight className={`${style.arrow} mt-3 mt-md-0`} />
            </div>
          </div>
        </div>
      </div>
    </Carousel.Caption>
  );
};

export default SliderCaption;
