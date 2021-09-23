import React from "react";
import image from "./../../images/car-club.png";

const CarClub = () => {
  return (
    <div className=" mb-3">
      <div className="row">
        <div className="col-md-6 d-md-flex align-items-center p-5 p-md-3">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 d-md-flex flex-column">
          <div>
            <h4 className="white200 m-0">METTOUR</h4>
            <h3 className="red m-0 mt_-6">CAR CLUB SINCE 1892</h3>
            <p className="white200 m-0 lp-3 fs-9 ">CUSROWE ZXZ CLUE</p>
          </div>
          <div>
            <p className="white200 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, harum. Quisquam repellendus quaerat sint at impedit
              cum! Neque, nihil dolorum.Voluptates, harum. Quisquam repellendus
              quaerat sint at impedit cum! Neque, nihil dolorum
            </p>
            <p className="white200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, harum.
            </p>
          </div>
          <div>
            <p className="fs-3 text-muted signature">Dechssa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarClub;
