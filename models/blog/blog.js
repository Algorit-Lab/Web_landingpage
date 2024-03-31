const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: { type: String },
    discription: { type: String },
    views : { type: Number},
    likes : { type: Number},
    comments : { type: Number},
});

module.exports = mongoose.model("posts", blogSchema);