const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    ip: { type: String },
    device: { type: String },
    deviceBrand: { type: String },
    deviceModel: { type: String },
    deviceOSVersion: { type: String },
    nAccess: { type: Number, default: 1 }
});

module.exports = mongoose.model("device", deviceSchema, "devices");
