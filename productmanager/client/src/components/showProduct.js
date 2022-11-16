import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const showProduct = (props) => {
    const {id} = useParams();
    const [showProduct, setshowProduct] = useState({});
    const navigate = useNavigate();
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
    const deleteItem = (idFromBelow) => { //Used the video walkthrough to learn about the filtering method,I read through similar code on stackoverflow but couldnt quite grasp what it meant.
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return ( // show products list here
        <div className="oneProduct-component">
            <h2>{showProduct.title}</h2>
            <p>Price: ${showProduct.price}</p>
            <p>Description: {showProduct.description}</p> 
            <button onClick={deleteItem}>Delete this Item!</button>
        </div>
    );
};

export default showProduct;