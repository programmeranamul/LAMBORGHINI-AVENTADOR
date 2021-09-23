import React from "react";
import style from "./seconSection.module.css";

const WelcomeTitle = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className={style.content}>
        <div className={style.text__container}>
          <h2 className={`${style.title} white700 text-uppercase fs-3`}>
            WELCOME TO <br />{" "}
            <b className="white800">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAR STORE
            </b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTitle;
