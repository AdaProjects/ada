const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const userController = require('../controller/userController');
const postController = require('../controller/postController');

app.use(bodyParser.json());


app.post('/setUser', userController.setUser, (req, res) => {

});

app.get('/login', userController.login, (req, res) => {

});

app.get('/posts', postController.getPosts, (req, res) => {

});

app.post('/post', postController.setPost, (req, res) => {

});

app.delete('/post', postController.removePost, (req, res) => {

});

app.post('/likePost', postController.likePost, (req, res) => {

});

app.post('/unlikePost', postController.unlikePost, (req, res) => {

});

app.post('/comment', postController.comment, (req, res) => {

});

app.get('/', newsController.getNews, (req, res) => {

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
