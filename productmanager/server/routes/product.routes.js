const ProductController = require("../controllers/product.controller");
module.exports = (app)=>{
    app.post("/api/products", ProductController.createProduct); //create route 
    app.get("/api/products",ProductController.getAllitems); //all items route
    app.get("/api/products/:id",ProductController.getItem); //ID needed for individual, actual value must be passed in url, not ":id"
    app.get("/api/products/:Id", ProductController.updateItem); //update an item
    app.delete("api/products/:id", ProductController.deleteItem); //delete item
}