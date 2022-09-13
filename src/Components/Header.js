import React from "react";

//Components
import ProductDetails from "./ListHeader/ProductDetails";
import ProductImg from "./ListHeader/ProductImg";
const Header = () => {
    return (
        <div className="container-fulid ">
            <div className="row pt-5  justify-content-center">
                <div className="col-sm-9 col-md-7 border p-3 h-50">
                    <ProductDetails />
                </div>
                <div className="col-sm-9 col-md-4 col-lg-4">
                    <ProductImg />
                </div>
            </div>
        </div>
    );
}
export default Header; 