// will display news feed upon navigation to the page.
import React, { Component } from 'react';
import ProjectDisplay from './ProjectDisplay.jsx';
const axios = require('axios');


class ProjectContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      favorites: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addFavorites = this.addFavorites.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);
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

    fetch('/getFavs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.props.userId
      })
    })
    .then((res) => {
      return res.json();
    })
    .then(res => {
      this.setState({
        favorites: res
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
        userId: this.props.userId
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.setState({
        projects: res
      });
    });
    projectForm.reset()
  }

  addFavorites(e, id) {
    console.log('this is the id: ', id)
    fetch('/likeProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.props.userId,
        projectId: id
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log('res is coming back!', res);
      this.setState({
        favorites: res
      });
    });
  }

  removeFavorites(e, id) {
    console.log('this is the id: ', id)
    fetch('/unlikeProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.props.userId,
        projectId: id
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      this.setState({
        favorites: res
      });
    });
  }


  render() {
    let projects = this.state.projects.map((cur, idx) => {

      return (
      <ProjectDisplay
      key={idx}
      item={cur}
      favorites={this.state.favorites}
      addFavorites={this.addFavorites}
      removeFavorites={this.removeFavorites}
    />
      )
    })

    return (
      <div className="projects-container">
        <form action="submit" onSubmit={this.handleSubmit} name="projectForm">
        <h3>
        Post a Project
        </h3>
        <div className="input-fields">
        <input type="text" placeholder="Project Title" name="title" className="title"/> <br/>
        <textarea type="text" placeholder="Project Description" name="description" className="description"/>
        </div>
        <br/>
        <div className="checkboxes">
          <div className="checkbox">
            <input type="checkbox" name="Javascript" value="Javascript" />  Javascript
          </div>
          <div className="checkbox">
            <input type="checkbox" name="React" value="React" />  React
          </div>
          <div className="checkbox">
            <input type="checkbox" name="Node" value="Node" />  Node
          </div>
          <div className="checkbox">
            <input type="checkbox" name="SQL" value="SQL" />  SQL
          </div>
          <div className="checkbox">
            <input type="checkbox" name="Vue" value="Vue" />  Vue
          </div>
          <div className="checkbox">
            <input type="checkbox" name="Python" value="Python" />  Python
          </div>

        <input type="button" value="SUBMIT" className="submit" onClick={this.handleSubmit}/>
        </div>
        </form>
        <h3>
        View Projects
        </h3>
        {projects}
      </div>
    )
  }
}

export default ProjectContainer;
