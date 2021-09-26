import React from "react";
import style from "./Footer.module.css";
import { leftFooterData, rightFooterData } from "./../Data/FooterData";
import LeftFooterCard from "./LeftFooterCard";
import RightFooterCard from "./RightFooterCard";

const TopFooter = () => {
  return (
    <div className={`bg-main ${style.top_footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-end flex-column">
            {leftFooterData.map((data, index) => (
              <LeftFooterCard key={index} data={data} />
            ))}
          </div>
          <div className="col-md-7">
            <div className="row">
              {rightFooterData.map((footerData, index) => (
                <RightFooterCard key={index} footerData={footerData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
