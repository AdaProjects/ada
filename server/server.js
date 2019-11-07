const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const redis = require('redis');
const client = redis.createClient();
const app = express();
const PORT = 3000;
require('dotenv').config();

const projectController = require('./controllers/projectController');
const newsController = require('./controllers/newsController');
const redisController = require('./controllers/redisController');
const userController = require('./controllers/userController');


app.use(bodyParser.json());

// redirect to ada after authentication through github
app.get('/oauth/redirect', userController.getAccessToken, userController.saveUserData, (req, res) => {
  console.log('accessToken', res.locals.accessToken);
  res.redirect(`/?access_token=${res.locals.accessToken}`);
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

// Returns all existing projects
app.get('/projects', projectController.getProjects, (req, res) => {
  res.status(200).send(res.locals.projects);
});

// Saves newly created project into the database
app.post('/project', projectController.saveProject, (req, res) => {
  res.status(200).send('Project successfully saved!');
});

// Returns projects saved by a specific user
app.post('/getFavs', projectController.getFavs, (req, res) => {
  res.status(200).send(res.locals.savedProjects);
});

// Saves a project to a specific user
app.post('/likeProject', projectController.likeProject, (req, res) => {
  res.status(200).send(`Project successfully saved to userId ${req.body.userId}!`);
});

// Unsaves a project from a specific user
app.post('/unlikeProject', projectController.unlikeProject, (req, res) => {
  res.status(200).send(`Project successfully removed from userId ${req.body.userId}!`);
});

// app.delete('/project', projectController.removeProject, (req, res) => {
//
// });

// app.post('/comment', projectController.comment, (req, res) => {
//
// });

// GET request to return article posts
app.get('/getNews', redisController.getArticles, newsController.getNews, redisController.setArticles, (req, res) => {
  res.status(200).json(res.locals.articles);
});

app.get('/', (req, res) => {
  const accessToken = req.query.access_token;
  if (accessToken) {
    res.set('accessToken', accessToken)
  }
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
