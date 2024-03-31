const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    "time_upload": { type: String },
    "time_update": { type: String },
    "title": { type: String },
    "content": { type: Array },
    "format": [
        {
            "open_tag": { type: String },
            "close_tag": { type: String },
        }
    ],
    "views": { type: Number },
    "like": { type: Number },
    "comment": [
        {
            "user_name": { type: String },
            "content": { type: String },
        }
    ],
    "is_deleted": { type: Boolean, default: false },
    "picture": { type: String },
    "slug": { type: String },
});

module.exports = mongoose.model("posts", postSchema, "postsTest");
