import React from 'react';
import CheckOutSidebar from '../../components/CheckOutPageComponent/CheckOutSidebar';
import CheckOutContactArea from './../../components/CheckOutPageComponent/CheckOutContactArea';
import style from "./../../components/CheckOutPageComponent/CheckOutPageComponent.module.css"

const CheckoutPage = () => {
    return (
        <div>
            <div className="row">
                <div className={`${style.left_side} col-lg-6`}>
                <CheckOutContactArea />
                </div>
                <div className={`${style.right_side} col-lg-6`}>
                <CheckOutSidebar />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;