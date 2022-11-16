import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ShowAll = (props) => {
    const { productList, setProductList} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteItem = (idFromBelow) => { //Used the video walkthrough to learn about the filtering method,I read through similar code on stackoverflow but couldnt quite grasp what it meant.
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = productList.filter((product, index) => product._id !== idFromBelow)
                setProductList.filter(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
    <div>
        {
            productList.map((product, index) => (
                <div key={product.index}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <br>
                    </br>
                    <Link to={'/product/edit/${product._id}'}>Edit Item!</Link>
                    <br>
                    </br>
                    <button onClick={()=>deleteItem(product._id)}>Delete This Item!</button>
                </div>
            )) //Link styling?
            }
        </div>
    );
};

export default ShowAll;