const { pool } = require('../models/config')
const userController = {};

userController.getAccessToken = (req, res, next) => {


  return next();
};

userController.setAccessToken = (req, res, next) => {



  return next();
};

userController.saveUserData = (req, res, next) => {
  // if user data is already in database, send back
}

module.exports = userController;
