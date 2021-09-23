import React, { useState } from "react";
import style from "./featured-product.module.css";
import { MdStar, MdStarBorder, MdShoppingCart } from "react-icons/md";
import { FeaturedProducts } from "../Data/FearuredProductData";

const FeaturedProduct = () => {
  const [FeaturedProductList] = useState(FeaturedProducts);
  const getRating = (rating) => {
    const totaRating = 5;
    const star = [];
    const unRating = totaRating - rating;
    for (let i = 0; i < rating; i++) {
      star.push("MdStar");
    }
    if (unRating > 0) {
      for (let i = 0; i < unRating; i++) {
        star.push("MdStarBorder");
      }
    }
    return star;
  };

  return (
    <div className="row mt-5">
      {FeaturedProductList.length > 0 &&
        FeaturedProductList.map((product, index) => (
          <div key={index} className="col-md-4 mb-5 mb-md-0 px-4">
            <div className={`${style.featured__product__card} card`}>
              <div className={style.card__image_wrapper}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="card-body">
                <div className={`${style.rating} pb-3`}>
                  {getRating(product.ratings)?.map((rating, index) =>
                    rating === "MdStar" ? (
                      <MdStar key={index} />
                    ) : (
                      <MdStarBorder key={index} />
                    )
                  )}{" "}
                  - <small className="white700">{product.ratingBy}</small>
                </div>
                <div className="pb-4">
                  <h5 className={`card-title white700`}>{product.title}</h5>
                  <p className="card-text white200">{product.description}</p>
                </div>
                <div className={style.price}>
                  <p className="">${product.price}</p>
                </div>
                <div>
                  <button className={`${style.my_btn} btn btn-sm`}>
                    <MdShoppingCart /> add to cart
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
