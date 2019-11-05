const axios = require('axios');
const newsController = {};

newsController.getNews = (req, res, next) => {

  axios.get(`https://newsapi.org/v2/everything?q=women in technology&page=1&apiKey=${process.env.NEWS_API_KEY}`)
    .then((response) => {
      res.locals.posts = response.data;
      next();
    });

};

module.exports = newsController;
