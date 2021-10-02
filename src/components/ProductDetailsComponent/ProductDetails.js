import React, { useState, useEffect } from "react";
import style from "./ProductDetails.module.css";
import { singleProductDetailsData } from "./../Data/SingleProductDetailsData";
import TextDescription from "./TextDescription";

const detailsMenuList = [
  "Description",
  "Reviews",
  "Additional Information",
  "Tags",
];

const ProductDetails = () => {
  const [selected, setSelected] = useState("Description");
  const [isLargeDevice, setIsLargeDevice] = useState(true);

  useEffect(() => {
    const updatesize = () => {
      if (window.innerWidth < 576) {
        setIsLargeDevice(false);
      } else {
        setIsLargeDevice(true);
      }
    };

    window.addEventListener("resize", updatesize);
    updatesize();

    return () => {
      window.removeEventListener("resize", updatesize);
    };
  }, []);

  return (
    <div className="container">
      <div className="d-md-flex mb-4">
        {detailsMenuList.map((menu, index) => (
          <div>
            {" "}
            <p
              onClick={() => setSelected(menu)}
              className={`${style.menu} me-5 cursor-ponter ${
                selected === menu ? style.active : ""
              }`}
              key={index}
            >
              {menu}
            </p>
            <div className="d-md-none">
              {menu === "Description" && (
                <div
                  className={`${
                    selected === "Description" ? "d-block" : "d-none"
                  }`}
                >
                  <TextDescription discription={singleProductDetailsData} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={`d-none d-md-block`}>
        <TextDescription discription={singleProductDetailsData} />
      </div>
    </div>
  );
};

export default ProductDetails;
