import React from 'react';
import ProductSection from '../../components/ProductDetailsComponent/ProductSection';
import RelatedProducts from '../../components/ProductDetailsComponent/RelatedProducts';
import PageBanner from '../../components/commonComponent/PageBanner/PageBanner';
import ProductDetails from '../../components/ProductDetailsComponent/ProductDetails';
import TecnicalData from '../../components/ProductDetailsComponent/TecnicalData';


const ProductDetailsPage = () => {
    return (
        <div >
           <PageBanner title="Sushila Autotechnik- SATuned" dontShowTitle={true}  menu={true}/>
           <ProductSection />
           <RelatedProducts />
           <ProductDetails />
           <TecnicalData />
        </div>
    );
};

export default ProductDetailsPage;