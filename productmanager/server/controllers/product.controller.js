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
    },
    updateItem: (req,res)=>{
        Product.findByIdAndUpdate({_id:req.params.id},
            req.body,
            {new:true,runValidators: true})
            .then((pushItem)=>{
                res.json(pushItem);
            })
    },
    deleteItem: (req,res)=> {
        Product.deleteOne({_id: req.params.id})
        .then((destroyItem)=>{
            console.log(destroyItem);
            res.json(destroyItem);
        })
    }
};//reminder that _id is only for specific database fields//