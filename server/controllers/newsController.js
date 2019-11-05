const axios = require('axios');
const newsController = {};

newsController.getNews = (req, res, next) => {
  console.log('are we in controller?')
  axios.get(`https://newsapi.org/v2/everything?q=women in technology&page=1&apiKey=${process.env.NEWS_API_KEY}`)
    .then((response) => {
      res.locals.posts = response.data;
      console.log('in newsController and res.locals.posts is ', res.locals.posts)
      next();
    });

};

module.exports = newsController;
