const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    title: { type: String },
    content: { type: String },
    func: { type: String },
    detailFunc: { type: String },
    instance : { type: Object},
});

module.exports = mongoose.model("type-product", productSchema);