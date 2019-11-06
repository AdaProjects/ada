// will display news feed upon navigation to the page.
import React, { Component } from 'react';
import ProjectDisplay from './ProjectDisplay.jsx'

class ProjectContainer extends Component {

  constructor() {
    super();
  }

  componentDidMount () {

  }

  render() {
    return (
      <div>
        <p>Projects go here!</p>
        <p>ProjectDisplay Component</p>
      </div>
    )
  }
}

export default ProjectContainer;
