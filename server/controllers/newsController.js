const axios = require('axios');
const newsController = {};

newsController.getNews = (req, res, next) => {
  if (res.locals.invalidate === true) {
    axios.get(`https://newsapi.org/v2/everything?q=women in technology&page=1&apiKey=${process.env.NEWS_API_KEY}`)
      .then((response) => {
        res.locals.articles = JSON.stringify(response.data["articles"].slice(0, 20));
        return next();
      });
  } else {
    return next();
  }
};

module.exports = newsController;
