import React from "react";
import style from "./Testimonial.module.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const TestimonialContent = ({ data }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center py-5 container col-md-8">
      <div className={`${style.user} mb-4`}>
        <img
          className="w-100 h-100 rounded-circle"
          src={data.image}
          alt="First slide"
        />
      </div>
      <p className="text-center d-flex mb-4">
        <span className={style.quotes}>
          <ImQuotesLeft />
        </span>
        <span className="px-4 white900">{data.text}</span>
        <span className={style.quotes}>
          <ImQuotesRight />
        </span>
      </p>
      <h5 className="text-uppercase text-white mb-4">{data.name}</h5>
    </div>
  );
};

export default TestimonialContent;
