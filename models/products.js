const mongoose = require('mongoose');

let prodsSchema = new mongoose.Schema({
    name: String,
    info: String,
    category: String,
    img_url: String,
    price: Number,
    date: { type:date, default: new Date() }
})

let product = mongoose.model("products", prodsSchema);
module.exports = product;