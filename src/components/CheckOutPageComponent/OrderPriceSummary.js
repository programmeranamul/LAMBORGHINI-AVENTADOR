import React from 'react';
import style from "./CheckOutPageComponent.module.css"

const OrderPriceSummary = () => {
    return (
        <>
        <div className={style.price_wrapper}>
            <div className="d-flex justify-content-between">
                <p className={style.price_type}>Subtotal</p>
                <p className={`${style.price} mb-0`}>RS. 1,150.00</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className={style.price_type}>Shipping</p>
                <p className={`${style.price_type} mb-0`}>Calculated at next step</p>
            </div>
        </div>
        <div className={style.total_area}>
            <p>Total</p>
            <p><span className={style.price_type}>RS.</span> <span className={style.grand_total}>112639</span></p>
        </div>
        </>
    );
};

export default OrderPriceSummary;