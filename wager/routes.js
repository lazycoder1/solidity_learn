const routes = require("next-routes")();

routes
    .add("/wagers/new", "/wagers/new")
    .add("/wagers/:address", "/wagers/show");

module.exports = routes;
