const { pool } = require('../models/config')
const projectController = {};

// middleware function that returns all projects from db
projectController.getProjects = (req, res, next) => {

  pool.query(`SELECT p._id, p.title, p.description, p.node, p.javascript, p.sql, p.vue, p.python, p.react, u.username, u.email, u."gitProfile", u."imageUrl" FROM projects p INNER JOIN users u ON p."userId" = u._id ORDER BY p._id DESC`, (error, results) => {
    if (error) throw error;
    res.locals.projects = results.rows;
    next();
  });
}

// middleware function that returns saved projects by specific userId
projectController.getFavs = (req, res, next) => {
  const { userId } = req.body;

  pool.query(`SELECT * FROM users_projects INNER JOIN projects ON users_projects."projectId" = projects._id WHERE users_projects."userId" = ${userId}`, (error, results) => {
    if (error) throw error;
    res.locals.savedProjects = results.rows;
    next();
  })
}

// middleware function that saves project to db
projectController.saveProject = (req, res, next) => {
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
      next();
    });
};

// middleware function that saves project to specific user
projectController.likeProject = (req, res, next) => {
    const { userId, projectId } = req.body;

    pool.query(`INSERT INTO users_projects ("userId", "projectId") VALUES(${userId}, ${projectId})`, (error, results) => {
      if (error) throw error;
      next();
    });
};

// middleware function that removes project from a specific user
projectController.unlikeProject = (req, res, next) => {
    const { userId, projectId } = req.body;

    pool.query(`DELETE FROM users_projects WHERE "userId"=${userId} AND "projectId"= ${projectId}`, (error, results) => {
      if (error) throw error;
      next();
    });
};

module.exports = projectController;
