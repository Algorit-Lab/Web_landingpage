const path = require('path');

const controllerPath = path.join(__dirname, '..', 'controller');
const modelsPath = path.join(__dirname, '..', 'models');
const publicPath = path.join(__dirname, '..', 'public');
const routesPath = path.join(__dirname, '..', 'routes');
const servicesPath = path.join(__dirname, '..', 'services');
const utilPath = path.join(__dirname, '..', 'util');
// const viewsPath = path.join(__dirname, '..', 'views');

module.exports = {
    controllerPath,
    modelsPath,
    publicPath,
    routesPath,
    servicesPath,
    utilPath,
    // viewsPath,
};
