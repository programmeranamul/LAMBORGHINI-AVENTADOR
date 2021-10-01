import React, { useState, useEffect } from "react";
import style from "./CheckOutPageComponent.module.css";
import { orderProductList } from "./../Data/OrderProductData";
import {
  MdShoppingCart,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import OrderPriceSummary from "./OrderPriceSummary";

const OrderPoroductList = () => {
  const [show, setShow] = useState(false);
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
      <div className=" pb-4 bg-white">
        <p className={`${style.logo} d-block d-lg-none mb-0 container`}>LAMBORGHINI</p>
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
          <p className={`${style.acc_grand_total} cursor-ponter mb-0`}>RS. 156785</p>
        </div>
      </div>
      <div
        className={`${style.product_conatiner} ${
          show ? "d-block" : "d-none"
        } container`}
      >
        {orderProductList.map((product, index) => (
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
                <p>RS. {product.price}</p>
              </div>
            </div>
          </div>
        ))}
        <OrderPriceSummary />
      </div>
    </div>
  );
};

export default OrderPoroductList;
