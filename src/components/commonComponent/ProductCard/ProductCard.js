import React from "react";
import style from "./ProductCard.module.css";
import { MdStar, MdStarBorder, MdShoppingCart } from "react-icons/md";

const ProductCard = ({ product, productPage }) => {
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
    <div
      className={`${
        productPage ? style.product_page_card : style.featured__product__card
      } card`}
    >
      <div className={style.card__image_wrapper}>
        <img className="card-img-top" src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        <div className={`${style.rating} pb-3`}>
          {getRating(product.ratings)?.map((rating, index) =>
            rating === "MdStar" ? (
              <MdStar key={index} />
            ) : (
              <MdStarBorder key={index} />
            )
          )}
          -
          <small className={style.retting_count}>
            {product.rettingCount === 0 ? "No" : product.rettingCount} review
          </small>
        </div>
        <div className="pb-3">
          <h5 className={`card-title fs-15 white700 font_oswald fw-500`}>
            {product.productTitle}
          </h5>
        </div>
        <div className={style.label_container}>
          {product.discount && (
            <div className={style.sale_label}>
              <span>-{product.discount}%</span>
            </div>
          )}
          {product.newProduct && (
            <div className={style.new_sale_label}>
              <span>New</span>
            </div>
          )}
          {product.sold && (
            <div className={style.new_sale_label}>
              <span>Sold</span>
            </div>
          )}
        </div>
        <div className={`${style.price} d-flex`}>
          {product.discount && (
            <p className={style.discount}>{product.discount}%</p>
          )}
          {product.newPrice && <p className="red me-3">${product.newPrice}</p>}
          <p
            className={
              product.newPrice
                ? `text-decoration-line-through ${style.old_price} fs-14`
                : "red"
            }
          >
            ${product.price}
          </p>
        </div>
        <div>
          <button className={`${style.my_btn} fs-14 btn`}>
            <MdShoppingCart className="me-2" /> <span>add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
