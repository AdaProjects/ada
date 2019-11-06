const projectController = {};

// middleware function that saves project to db
projectController.saveProject = (req, res, next) => {

    const {
      title,
      description,
      react,
      javascript,
      node,
      python,
      vue,
      sql,
      userId
    } = req.body;

    pool.query(`INSERT INTO projects (title, description, react, javascript, node, python,vue, sql, userId) VALUES('${title}', '${description}', ${react}, ${javascript}, ${node}, ${python}, ${vue}, ${sql}, '${userId}')`, (error, results) => {
      if (error) throw error;
      return next();
    });
};

module.exports = projectController;
