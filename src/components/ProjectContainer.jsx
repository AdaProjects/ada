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
      
      return (<ProjectDisplay
      key={idx}
      item={cur}
    />
      )
    })

      return (
          <div>
          <form action="submit">
          Post a Project
          <input type="text" placeholder="Project Title" />
          <input type="text" placeholder="Project Description" />
          <br/>
          Tech Stack
          <br/>
          <input type="checkbox" name="Javascript" value="Javascript" /> Javascript
          <input type="checkbox" name="React" value="React" /> React
          <input type="checkbox" name="Node" value="Node" /> Node <br/>
          <input type="checkbox" name="SQL" value="SQL" /> SQL
          <input type="checkbox" name="Vue" value="Vue" /> Vue
          <input type="checkbox" name="Python" value="Python" /> Python
          </form>

          {projects}
        </div>
      )
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
