const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
{
    setup: String,
    punchline: String,
},
{ timestamps: true });

const Joke = mongoose.model("Jokes", JokesSchema);

module.exports = Joke;