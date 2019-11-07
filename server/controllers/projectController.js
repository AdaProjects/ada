const { pool } = require('../models/config')
const projectController = {};

projectController.getProjects = (req, res, next) => {
  pool.query(`SELECT * FROM projects ORDER BY projects._id DESC`, (error, results) => {
    if (error) throw error;
    res.locals.projects = results.rows;
    return next();
  });
}

// middleware function that saves project to db
projectController.saveProject = (req, res, next) => {
    console.log('in projectController and req.body is ', req.body)
    const {
      title,
      description,
      javascript,
      react,
      node,
      sql,
      vue,
      python,
      userId
    } = req.body;

    pool.query(`INSERT INTO projects (title, description, javascript, react, node, sql, vue, python, "userId") VALUES('${title}', '${description}', ${javascript}, ${react}, ${node}, ${sql}, ${vue}, ${python}, ${userId})`, (error, results) => {
      if (error) throw error;
      return next();
    });
};

module.exports = projectController;
