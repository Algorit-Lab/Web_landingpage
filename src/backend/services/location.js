const mongoose = require('mongoose');
const Location = require('../models/access/location');

const locationService = {
    createLocation: async (data) => {
        const that = await Location.findOne({ ip: data.ip });

        if (that &&
            that.country == data.country &&
            that.region == data.region) {
            if (that) {
                that.nAccess++;
                await that.save();
            }
            return
        }
        const location = new Location(data);
        return await location.save();
    },

    getLocation: async (ip) => {
        return await Location.findByIp(ip);
    },

    updateLocation: async (ip, data) => {
        return await Location.findByIpAndUpdate(ip, data, { new: true });
    },

    deleteLocation: async (ip) => {
        return await Location.findByIpAndRemove(ip);
    },

    getAllLocations: async () => {
        return await Location.find({});
    }
};

module.exports = locationService;
