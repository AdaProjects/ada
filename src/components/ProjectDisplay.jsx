import React, {Component} from 'react';

// will display project feed upon navigation from newsfeed.
class ProjectDisplay extends Component {
  constructor() {
    super();
    // this.state = {
    //   title: null,
    //   description: null,
    //   javascript: false,
    //   react: false,
    //   node: false,
    //   sql: false,
    //   vue: false,
    //   python: false
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(projectForm)
    let title = data.get('title');
    let description = data.get('description');
    let javascript, react, node, sql, vue, python
    data.get('Javascript') === 'Javascript' ? javascript = true : javascript = false;
    data.get('React') === 'React' ? react = true : react = false;
    data.get('Node') === 'Node' ? node = true : node = false;
    data.get('Sql') === 'Sql' ? sql = true : sql = false;
    data.get('Vue') === 'Vue' ? vue = true : vue = false;
    data.get('Python') === 'Python' ? python = true : python = false;
    console.log('title: ', title);
    console.log('description: ', description);
    console.log('javascript: ', javascript);
    console.log('react: ', react);
    console.log('node: ', node);
    console.log('sql: ', sql);
    console.log('vue: ', vue);
    console.log('python: ', python)
    fetch('/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        javascript: javascript,
        react: react,
        node: node,
        sql: sql,
        vue: vue,
        python: python,
        userId: 2
      })
    })
  }

  render() {
    return (
      <div className="header">
        Project Display
        <form action="submit" name="projectForm" onSubmit={this.handleSubmit} id="projectForm">
          Post a Project
          <input type="text" name="title" placeholder="Project Title" id="title"/>
          <input type="text" name="description" placeholder="Project Description" id="description"/>
          <br/>
          Tech Stack
          <br/>
          <input type="checkbox" name="Javascript" value="Javascript" /> Javascript
          <input type="checkbox" name="React" value="React" /> React
          <input type="checkbox" name="Node" value="Node" /> Node <br/>
          <input type="checkbox" name="SQL" value="SQL" /> SQL
          <input type="checkbox" name="Vue" value="Vue" /> Vue
          <input type="checkbox" name="Python" value="Python" /> Python
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ProjectDisplay;
