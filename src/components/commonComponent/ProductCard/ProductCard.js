import React from "react";
import style from "./ProductCard.module.css";
import { MdStar, MdStarBorder, MdShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
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
                  - <small className="white700">{product.rettingCount == 0 ? "No" : product.rettingCount} review</small>
                </div>
                <div className="pb-3">
                  <h5 className={`card-title white700 font_oswald fw-500`}>
                    {product.title}
                  </h5>
                </div>
                {
                  product.discount && <div className={style.sale_label}>
                    <span>-{product.discount}%</span>
                  </div>
                }
                <div className={`${style.price} d-flex`}>
                  {product.discount && (
                    <p className={style.discount}>{product.discount}%</p>
                  )}
                  {product.newPrice && (
                    <p className="red me-3">${product.newPrice}</p>
                  )}
                  <p
                    className={
                      product.newPrice
                        ? "text-decoration-line-through white300"
                        : "red"
                    }
                  >
                    ${product.price}
                  </p>
                </div>
                <div>
                  <button className={`${style.my_btn} fs-14 btn`}>
                    <MdShoppingCart /> add to cart
                  </button>
                </div>
              </div>
            </div>
          // {/* </div> */}
     
    // </div>
  );
};

export default ProductCard;
