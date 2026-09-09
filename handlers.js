

const { get_data, get_devices, get_messages } = require('./interfaces');

module.exports = {

    getData: async function(req, res, next) {
        res.send(await get_data());
    },

    getDevices: async function(req, res, next) {
        res.send(await get_devices());
    },

    getMessages: async function(req, res, next) {
        res.send(await get_messages());
    },

}