import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const showProduct = (props) => {
    const {id} = useParams();
    const [showProduct, setshowProduct] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setshowProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return ( // show products list here
        <div className="oneProduct-component">
            <h2>{showProduct.title}</h2>
            <p>Price: ${showProduct.price}</p>
            <p>Description: {showProduct.description}</p> 
        </div>
    );
};

export default showProduct;