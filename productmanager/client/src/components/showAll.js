import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const showAll = (props) => {
    const { productList, setProductList} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, [id]);
    return (
    <div>
        {
            productList.map((product, index) => (
                <div key={index}>
                    <Link to={`/product/${product._id}`}>
                    {product.title}
                    </Link>
                </div>
            )) //Link styling?
            }
        </div>
    );
};

export default showAll;