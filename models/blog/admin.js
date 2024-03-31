const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    is_admin: { type: Boolean, default: false},
    token : { type: String}
});

module.exports = mongoose.model("admin", adminSchema, "admin");