import React from "react";
import style from "./Testimonial.module.css";
import { Carousel } from "react-bootstrap";
import user from "./../../../images/user1.jpg";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import TestimonialContent from "./TestimonialContent";
import { testimonialData } from "../../Data/TestimonialData";

const Tstimonial = () => {
  return (
    <div className={style.section}>
      <Carousel className={style.my_carusel} controls={false}>
        {/* <Carousel.Item>
          <div className="d-flex justify-content-center flex-column align-items-center py-5 container col-md-8">
            <div className={`${style.user} mb-4`}>
              <img
                className="w-100 h-100 rounded-circle"
                src={user}
                alt="First slide"
              />
            </div>
            <p className="text-center d-flex mb-4">
              <span className={style.quotes}>
                <ImQuotesLeft />
              </span>
              <spa className="px-4 white900">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                laborum  repellen voluptate deleniti consectetur
                necessitatibus  fugiat?
              </spa>
              <span className={style.quotes}><ImQuotesRight /></span>
            </p>
            <h5 className="text-uppercase text-white mb-4">Anamul</h5>
            
          </div>
        </Carousel.Item> */}

        {testimonialData.length > 0 &&
          testimonialData.map((data, index) => (
            <Carousel.Item key={index}>
              <TestimonialContent data={data}/>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default Tstimonial;
