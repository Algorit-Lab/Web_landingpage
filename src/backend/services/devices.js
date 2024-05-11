const Device = require('../models/access/devices');

const deviceService = {
    createDevice: async (data) => {
        const that = await Device.findOne({ ip: data.ip });
        if (that &&
            that.device == data.device &&
            (data.deviceBrand == "" || (that.deviceBrand == data.deviceBrand && that.deviceModel == data.deviceModel)) &&
            that.deviceOSVersion == data.deviceOSVersion) {
            if (that) {
                that.nAccess++;
                await that.save();
            }
            return
        }

        const device = new Device(data);
        return await device.save();
    },

    getDevice: async (id) => {
        return await Device.findById(id);
    },

    updateDevice: async (id, data) => {
        return await Device.findByIdAndUpdate(id, data, { new: true });
    },

    deleteDevice: async (id) => {
        return await Device.findByIdAndRemove(id);
    },

    getAllDevices: async () => {
        return await Device.find({});
    },
};

module.exports = deviceService;
