const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const redis = require('redis');
const client = redis.createClient();
const app = express();
const PORT = 3000;
require('dotenv').config();

const postController = require('./controllers/postController');
const newsController = require('./controllers/newsController');
const redisController = require('./controllers/redisController');
const userController = require('./controllers/userController');


app.use(bodyParser.json());

// redirect to ada after authentication through github
app.get('/oauth/redirect', (req, res) => {
  const requestToken = req.query.code;
  console.log('code', req.query.code)
  fetch (`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${requestToken}`, {
    // make a POST request
    method: 'post',
    // to the Github authentication API, with the client ID, client secret
    // and request token
    // Set the content type header, so that we get the response in JSOn
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    console.log('response', response)
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token
    console.log('accessToken', accessToken)
    // redirect the user to the welcome page, along with the access token
    res.redirect(`/?access_token=${accessToken}`);
  })
  .catch(err => {
    console.log("error requesting access token", err);
  })
})

// request user data from github using access token and client secret
// app.post(`https://github.com/login/oauth/${accessToken}`, (req, res) => {

// })

// app.post('/setUser', userController.setUser, (req, res) => {
//
// });
//
// app.get('/login', userController.login, (req, res) => {
//
// });

// app.get('/posts', postController.getPosts, (req, res) => {
//
// });
//
// app.post('/post', postController.setPost, (req, res) => {
//
// });
//
// app.delete('/post', postController.removePost, (req, res) => {
//
// });
//
// app.post('/likePost', postController.likePost, (req, res) => {
//
// });
//
// app.post('/unlikePost', postController.unlikePost, (req, res) => {
//
// });
//
// app.post('/comment', postController.comment, (req, res) => {
//
// });

// GET request to return article posts
app.get('/getNews', redisController.getArticles, newsController.getNews, redisController.setArticles, (req, res) => {
  res.status(200).json(res.locals.articles );
});

app.get('/', userController.authenticate, (req, res) => {
    const requestToken = req.query.code;
    console.log('code', requestToken);
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.all('*', (req, res) => {
  res.sendStatus(404);
});


// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }
  const errObj = Object.assign((defaultErr, err));
  res.status(errObj.status).json(errObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
