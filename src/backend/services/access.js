const Access = require('../models/access/access'); // Assuming the model name is Access

const accessService = {
    createAccess: async (data) => {
        const that = await Access.findOne({ ip: data.ip });

        if (that &&
            that.browser == data.browser &&
            that.browserVersion == data.browserVersion) {
            if (that) {
                that.nAccess++;
                await that.save();
            }
            return
        }

        const access = new Access(data);
        return await access.save();
    },

    getAccess: async (ip) => {
        return await Access.findByIp(ip);
    },

    updateAccess: async (ip, data) => {
        return await Access.findByIpAndUpdate(ip, data, { new: true });
    },

    deleteAccess: async (ip) => {
        return await Access.findByIpAndRemove(ip);
    },

    getAllAccesses: async () => {
        return await Access.find({});
    }
};

module.exports = accessService;
