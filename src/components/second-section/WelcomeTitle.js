import React from "react";
import style from "./seconSection.module.css";

const WelcomeTitle = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class={style.content}>
        <div class={style.text__container}>
          <h2 class={`${style.title} white700 text-uppercase fs-3`}>
            WELCOME TO <br />{" "}
            <b class="white800">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAR STORE
            </b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTitle;
