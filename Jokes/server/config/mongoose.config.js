const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost/Jokes_API_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(() => console.log("You have successfully connected to the database."))
.catch((err) =>console.log("There was an error while connecting to the database.", err));