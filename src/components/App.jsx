// main container for application
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsDisplay: false,
      profileDisplay: false,
      projectDisplay: false,
      projectFav: false,
      signedIn: false,
    }
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App;
