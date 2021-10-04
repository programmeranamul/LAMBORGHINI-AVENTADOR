import React, { useState, useEffect } from "react";
import style from "./CheckOutPageComponent.module.css";
import { orderProductList } from "./../Data/OrderProductData";
import {
  MdShoppingCart,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import OrderPriceSummary from "./OrderPriceSummary";
import { Alert } from "react-bootstrap";

const OrderPoroductList = () => {
  const [show, setShow] = useState(false);
  const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];

  let subTotal = 0;
  for (let i = 0; i < cardproducts.length; i++) {
    const product = cardproducts[i];
    const productPrice = product.price * product.quantity;
    subTotal =subTotal + productPrice;
  }

  

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 992) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <div>
      <div className="d-block d-lg-none  pb-4 bg-white">
        <p className={`${style.logo} mb-0 container`}>
          LAMBORGHINI
        </p>
      </div>
      <div
        className={` d-block d-lg-none mb-2 ${style.show_hide_sidebar}`}
        onClick={() => setShow(!show)}
      >
        <div className="container d-flex justify-content-between align-items-center py-3">
          <p className="text-sky cursor-ponter mb-0">
            <span>
              <MdShoppingCart />
            </span>{" "}
            <span>{show ? "Hide order summary" : "Show order summary"}</span>{" "}
            <span>
              {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </p>
          <p className={`${style.acc_grand_total} cursor-ponter mb-0`}>
            RS. 156785
          </p>
        </div>
      </div>
      <div
        className={`${style.product_conatiner} ${
          show ? "d-block" : "d-none"
        } container`}
      >
        {cardproducts.length > 0 ? cardproducts.map((product, index) => (
          <div key={index} className={`${style.order_product_list} mb-3`}>
            <div className="d-flex">
              <div className={style.product_img_container}>
                <img src={product.image} alt="" />
                <span className={style.product_qountaty}>
                  {product.quantity}
                </span>
              </div>
              <div className={style.product_des}>
                <p>{product.title}</p>
                <p>RS. {product.price * product.quantity}</p>
              </div>
            </div>
          </div>
        )) : <Alert varient = "danger" >No product available in cart </Alert>}
        <OrderPriceSummary subTotal = {subTotal}/>
      </div>
    </div>
  );
};

export default OrderPoroductList;
