import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import OurProduct from "./OurProduct";

const OurProducts = () => {
  return (
    <div className="bg-main py-5">
      <SectionTitle
        text={"Our products"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, recusandae?"
        }
      />
      <OurProduct />
    </div>
  );
};

export default OurProducts;
