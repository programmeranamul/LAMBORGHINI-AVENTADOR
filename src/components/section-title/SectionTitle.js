import React from "react";
import style from "./SectionTitle.module.css";

const SectionTitle = ({ text, description }) => {
  return (
    <div className="d-flex flex-column">
      <div className={`${style.title_border}  d-inline-block mx-auto`}>
        <div
          className={`${style.inside} d-flex align-items-center justify-content-center `}
        >
          <h6 className="text-uppercase m-0 text-white">
            <span>* </span>
            {text} <span> *</span>
          </h6>
        </div>
      </div>
      <p className="text-center white200 mt-2">{description}</p>
    </div>
  );
};

export default SectionTitle;
