import React from "react";
import style from "./ProductBanner.module.css";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../../MenuBar/Menu";

const ProductBanner = () => {
  return (
    <section className={style.section}>
      <div className={style.product_page_menu_conatiner}>
        <Menu bg={"white"} />
      </div>
      <div className="container">
        <h2>PRODUCTS</h2>
     <div className={`text-white text-center ${style.breadcrumb_wrapper}` }>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              <Link to="/product">Product</Link>
            </Breadcrumb.Item >
          </Breadcrumb>
        </div> 
      </div>
    </section>
  );
};

export default ProductBanner;
