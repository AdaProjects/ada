const { pool } = require('../models/config');
const axios = require('axios');
const userController = {};

userController.getAccessToken = (req, res, next) => {
  const requestToken = req.query.code;
  axios({
    // make a POST request
    method: 'post',
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token;
    res.locals.accessToken = accessToken;

    return next();
  })
  .catch(err => {
    console.log("error requesting access token", err);
  })
};

userController.saveUserData = (req, res, next) => {
  const config = {
    headers: {'Authorization': 'token ' + res.locals.accessToken}
  };

  axios.get('https://api.github.com/user', config)
  .then((response) => {
    const username = response.data.login;

    pool.query(`SELECT * FROM users WHERE username = '${username}'`, (error, results) => {
      if (error) throw error;

      if (results.rowCount === 0) {
        const insertionStatement = `INSERT INTO users ("gitProfile", "username", "imageUrl", "email", "accesstoken")
                                    VALUES ('${response.data.html_url}',
                                            '${username}',
                                            '${response.data.avatar_url}',
                                            '${response.data.email}',
                                            '${res.locals.accessToken}')`;
        pool.query(insertionStatement, (error, results) => {
          if (error) throw error;
        });
      } else {
         const updateStatement = `UPDATE users
                                  SET "accesstoken"='${res.locals.accessToken}'
                                  WHERE username = '${username}'`;
          pool.query(updateStatement, (error, results) => {
            if (error) throw error;
          });
      }
    });
  });

  return next();
}

module.exports = userController;
