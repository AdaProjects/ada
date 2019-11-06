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

app.post('/project', projectController.saveProject, (req, res) => {
  res.status(200).send('Project successfully saved!');
});

// app.delete('/post', postController.removePost, (req, res) => {
//
// });

// app.post('/likePost', postController.likePost, (req, res) => {
//
// });

// app.post('/unlikePost', postController.unlikePost, (req, res) => {
//
// });

// app.post('/comment', postController.comment, (req, res) => {
//
// });

// GET request to return article posts
app.get('/getNews', redisController.getArticles, newsController.getNews, redisController.setArticles, (req, res) => {
  res.status(200).json(res.locals.articles);
});

app.get('/', (req, res) => {
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
