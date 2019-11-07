// will display news feed upon navigation to the page.
import React, { Component } from 'react';
import ProjectDisplay from './ProjectDisplay.jsx'

class ProjectContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    fetch('/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then(res => {
      this.setState({
        projects: res
      });
    });
  }

  componentDidUpdate () {

    fetch('/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then(res => {
      this.setState({
        projects: res
      });
    });
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
    let projects = this.state.projects.map((cur, idx) => {

      return (<ProjectDisplay
        key={idx}
        item={cur}
      />
      )
    })

    return (
      <div className="projects-container">
        <form action="submit" onSubmit={this.handleSubmit} name="projectForm">
         Post a Project
          <input type="text" placeholder="Project Title" name="title"/>
          <input type="text" placeholder="Project Description" name="description"/>
          <br/>
          Tech Stack
          <br/>
          <input type="checkbox" name="Javascript" value="Javascript" /> Javascript
          <input type="checkbox" name="React" value="React" /> React
          <input type="checkbox" name="Node" value="Node" /> Node <br/>
          <input type="checkbox" name="SQL" value="SQL" /> SQL
          <input type="checkbox" name="Vue" value="Vue" /> Vue
          <input type="checkbox" name="Python" value="Python" /> Python
          <input type="submit" value="Submit"/>
        </form>
        {projects}
      </div>
    )
  }
}

export default ProjectContainer;
