const redis = require('redis');
const client = redis.createClient();
const redisController = {};

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

redisController.getArticles = (req, res, next) => {
  res.locals.invalidate = false;
  client.get('timestamp', function (error, result) {
      if (error) {
        console.log(error);
        throw error;
      }

      if (result === null || Date.now() - result > 300000) {
        res.locals.invalidate = true;
      }

      if (res.locals.invalidate === false) {
        client.get('articles', function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }
            res.locals.articles = result;

            return next();
        });
      } else {
        return next();
      }
  });
};

redisController.setArticles = async (req, res, next) => {
  if (res.locals.invalidate === true) {
    await client.set('timestamp', Date.now())
    await client.set('articles', res.locals.articles, redis.print)
  }

  return next();
}

module.exports = redisController;
