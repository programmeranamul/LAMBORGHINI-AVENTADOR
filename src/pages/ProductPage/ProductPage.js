import React from 'react';
import ProductPageLayout from '../../components/productPageComponent/ProductPageLayout/ProductPageLayout';
import ProductBanner from './../../components/productPageComponent/ProductBanner/ProductBanner';

const ProductPage = () => {
    return (
        <div>
           <ProductBanner />
           <ProductPageLayout />
        </div>
    );
};

export default ProductPage;