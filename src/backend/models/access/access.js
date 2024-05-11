const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const access = new Schema({
    ip: { type: String },
    browser: { type: String },
    browserVersion: { type: Number },
    nAccess: { type: Number, default: 1 }

});

module.exports = mongoose.model("access", access, "access");
