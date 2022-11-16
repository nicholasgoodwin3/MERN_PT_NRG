import React, { useState } from "react";
import newProduct from "../components/newProduct";
import showAll from "../components/showAll";

const Main = (props) => {
    const [productList, setProductList] = useState([]);
    return (
        <div>
            <newProduct
                productList={productList}
                setProductList={setProductList}/>
                        
            <showAll
                productList={productList}
                setProductList={setProductList}/>
        </div>
    );
};
export default Main; //used video guide for help setting this page up/destructuring