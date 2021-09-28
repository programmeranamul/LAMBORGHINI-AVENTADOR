import React, { useState, useEffect } from "react";
import style from "./Footer.module.css";
import { FaAngleDown } from "react-icons/fa";

const RightFooterCard = ({ footerData }) => {
  const [device, setDevice] = useState("large");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 992) {
        setDevice("large");
      } else if (window.innerWidth > 768) {
        setDevice("medium");
      } else {
        setDevice("small");
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <>
      {footerData.map((data, index) => (
        <>
          <div key={index} className={`col-lg-3 col-md-6 ${style.menu_card}`}>
            <div className={style.title_wrapper}>
              <h4 className={`text-white text-uppercase d-flex justify-content-between ${style.title}`}>
                {data.title}
                <span
                  className={`${device !== "large" ? "d-block" : "d-none"}`}
                >
                  <FaAngleDown className={"ms-auto"} />
                </span>
              </h4>
            </div>
            <div className={`${device === "large" ? "d-block" : "d-none"}`}>
              {data.links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className={`${style.menu_link} d-block mb-3`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default RightFooterCard;
