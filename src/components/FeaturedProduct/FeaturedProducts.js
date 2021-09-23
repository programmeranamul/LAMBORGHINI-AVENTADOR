import React from "react";
import SectionTitle from "../section-title/SectionTitle";
import FeaturedProduct from "./FeaturedProduct";

const FearuredProducts = () => {
  return (
    <div className="mt-0 pt-3 mt-md-5 ">
      <SectionTitle
        text={"fetaured products"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, recusandae?"
        }
      />
      <FeaturedProduct />
    </div>
  );
};

export default FearuredProducts;
