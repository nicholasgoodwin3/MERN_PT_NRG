const Product = require("../models/product.model.js");
module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },
    getAllitems:(req,res) =>{
        Product.find({})
        .then((allItems)=> {
            console.log(allItems);
            res.json(allItems);
        })
        .catch((err) => console.log(err));
    },
    getItem: (req,res) =>{
        Product.findItem({_id: req.params.id})
        .then((oneItem)=>{
            console.log(getItem);
            res.json(oneItem);
        })
        .catch((err) => console.log(err));
    }
};