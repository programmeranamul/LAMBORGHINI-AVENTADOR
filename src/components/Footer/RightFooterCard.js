import React from "react";
import style from "./Footer.module.css";

const RightFooterCard = ({ footerData }) => {
  return (
    <>
      {footerData.map((data, index) => (
        <div key={index} className={`col-md-3 ${style.menu_card}`}>
          <h4 className={`text-white text-uppercase ${style.title}`}>
            {data.title}
          </h4>
          <div>
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
      ))}
    </>
  );
};

export default RightFooterCard;
