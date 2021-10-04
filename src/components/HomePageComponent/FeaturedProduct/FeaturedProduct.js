import React, { useState } from "react";
import style from "./featured-product.module.css";
import {  MdShoppingCart } from "react-icons/md";
import { FeaturedProducts } from "../../Data/FearuredProductData";
import ShowReview from './../../commonComponent/ShowReview/ShowReview';

const FeaturedProduct = () => {
  const [FeaturedProductList] = useState(FeaturedProducts);
 

  return (
    <div className="row mt-5">
      {FeaturedProductList.length > 0 &&
        FeaturedProductList.map((product, index) => (
          <div key={index} className="col-md-4 mb-5 mb-md-0 ">
            <div className={`${style.featured__product__card} card`}>
              <div className={style.card__image_wrapper}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.productTitle}
                />
              </div>
              <div className="card-body">
                <ShowReview product={product}/>
                <div className="pb-4">
                  <h5 className={`card-title white700 ${style.title}`}>
                    {product.productTitle}
                  </h5>
                  <h5
                    className={`card-title fs-13 font_rubik white700 font_oswald fw-500`}
                  >
                    One stop solution for Luxury Auto Parts
                  </h5>
                  {/* <p className={`card-text white200 ${style.description}`}>
                    {product.description}
                  </p> */}
                </div>
                <div className={`${style.price} font_oswald`}>
                  <p className="">RS.{product.price}</p>
                </div>
                <div>
                  <button
                    className={`${style.my_btn} d-flex align-items-center justify-content-center font_oswald btn`}
                  >
                    <MdShoppingCart className="me-2" /> <span>add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturedProduct;
