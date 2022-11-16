const ProductController = require("../controllers/product.controller");
module.exports = (app)=>{
    app.post("/api/products", ProductController.createProduct); //create route 
    app.get("/api/products",ProductController.getAllitems); //all items route
    app.get("/api/prodcuts/:id",ProductController.getItem); //ID needed for individual, actual value must be passed in url, not ":id"
}