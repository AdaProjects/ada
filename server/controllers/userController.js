const userController = {};

userController.authenticate = (req, res, next) => {
  console.log(req.query.code);

  // const query = window.location.search.substring(1);
  // const token = query.split('access_token=')[1];
  // console.log(token);

  return next();
}

userController.saveUserData = (req, res, next) => {
  // if user data is already in database, send back 
}

module.exports = userController;
