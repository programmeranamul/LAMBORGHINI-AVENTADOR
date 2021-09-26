import React from "react";
import style from "./Footer.module.css"

const LeftFooterCard = ({data}) => {
  return (
    <>
      <h4 className={`text-white text-uppercase ${style.title}`}>{null}</h4>
      <p className="white300">{data.description}  </p>
      {data.contents.map((content) => (
        <div className="mt-auto">
          <h6 className="fw-bold text-white d-flex align-items-center mb-3 ">
            <content.icon className="red me-3 fs-21 red900" />
            <span>{content.text} :</span>
          </h6>
        </div>
      ))}
    </>
  );
};

export default LeftFooterCard;
