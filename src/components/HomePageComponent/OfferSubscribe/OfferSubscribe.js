import React from "react";
import style from "./OfferSubscribe.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const OfferSubscribe = () => {
  return (
    <div className={`bg-main ${style.section}`}>
      <div className="container text-center">
        <small className={`red mb-sm-2 mb-3  font_rubik`}>Lorem ipsum dolor sit amet.</small>
        <h3 className={`text-uppercase text-white mb-2 ${style.title}`}>
          Ten percent member discount
        </h3>
        <p className={`white300 `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at.
        </p>
        <div >
          <form className="col-lg-5 col-md-7  col-sm-9 col-10 mx-auto mt-4 pt-3">
            <div className={style.subcribe_container}>
            <input
              type="text"
              className={`form-control ${style.subscribe_input}`}
              placeholder="Email Address"
            />
            <span className={style.icon}><MdKeyboardArrowRight /></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferSubscribe;
