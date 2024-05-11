const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    ip: { type: String },
    country: { type: String },
    region: { type: String },
    countryName: { type: String },
    regionName: { type: String },
    location: { type: String },
    nAccess: { type: Number, default: 1 }
});

module.exports = mongoose.model("location", locationSchema, "location");
