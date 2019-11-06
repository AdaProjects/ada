// will display news feed upon navigation to the page.
import React, { Component } from 'react';
import ProjectDisplay from './ProjectDisplay.jsx'

class ProjectContainer extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
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

  render() {
    let projects = this.state.projects.map((cur, idx) => {
      return (
        <ProjectDisplay
          key={idx}
          item={cur}
        />
      )
    })
  return (
    <div>
      <p>We see all the projects Projects!</p>
      <div>
        {projects}
      </div>
    </div>
  )
  }
}

export default ProjectContainer;
