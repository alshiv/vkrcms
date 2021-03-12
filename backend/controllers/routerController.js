const Router = require('../models/routerModel');

exports.getRoutes = async (req, res, next) => {
    const routes = await Router.find({});
    res.status(200).json({
      routes,
    });
  };