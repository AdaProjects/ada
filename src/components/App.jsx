// main container for application
// import * as React from 'react';
import React, { Component } from 'react';
import NewsDisplay from './NewsDisplay.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      newsDisplay: true,
      profileDisplay: false,
      projectDisplay: false,
      projectFav: false,
      signedIn: false,
    }
  }

  


  render() {
    return (
  
      <div>
        {/* <p>in APP!</p> */}
        <NewsDisplay />
      </div>
 
    )
  }
}

export default App;