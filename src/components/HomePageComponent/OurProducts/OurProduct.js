import React, { useState } from "react";
import ProductCard from "../../commonComponent/ProductCard/ProductCard";
import { ourProductsData } from "./../../Data/ourProductsData";
import style from "./OurProduct.module.css";

const categorys = ["Wheels", "Sounds", "Featured", "Home page"];

const OurProduct = () => {
  const [ourProducts] = useState(ourProductsData);
  return (
    <div className="container">
      <div className="d-flex align-items-center flex-wrap justify-content-center">
        {categorys.map((category, index) => (
          <p key={index} className={`mx-2 white300 ${style.category}`}>
            {category}
          </p>
        ))}
      </div>
      <div className="row mt-5">
        {ourProducts.map((product, index) => (
          <div key={index} className="col-lg-3 mb-5 mb-lg-0 d-flex col-sm-6 ">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
