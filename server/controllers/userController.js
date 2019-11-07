const { pool } = require('../models/config')
const userController = {};

userController.getUser = (req, res, next) => {
  
  pool.query(`SELECT * FROM projects ORDER BY projects._id DESC`, (error, results) => {
    if (error) throw error;
    res.locals.projects = results.rows;
    return next();
  });
}

module.exports = userController;
