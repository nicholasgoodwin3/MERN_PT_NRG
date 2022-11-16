import React, {useState, useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const updateItem = (props)=>{
const {id} =useParams();
const [title,setTitle] = useState("");
const [price, setPrice] = useState();
const [ description,setDescription] = useState("");

const navigate=useNavigate();
useEffect(()=>{
    axios.get('http://localhost:8000/api/products/${id}')
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
    })
},[])

const submitHandler = (e)=>{
    e.preventDefailt();
    axios.put('http://localhost:8000/api/products/${id}',{
        title,
        price,
        description
    })
    .then((res)=>{
        console.log(res);
        console.log(res.data);
    })
}
return(
    <form>
            <div className="form-fields">
                <label>Title</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                />
            </div>
            <div className="form-fields">
                <label>Price</label>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                />
            </div>
            <div className="form-fields">
                <label>Description</label>
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                />
            </div>
            <input className="submit-input" type="submit" value="Update" />
        </form>
) //copied form from newProduct form.

return(
    <p1>
    updateItem
    </p1>
)

}