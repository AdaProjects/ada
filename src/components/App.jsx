// main container for application
import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import MainContainer from './MainContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';
require('../styles.css');

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class App extends Component {

  constructor() {
    super();
    this.state = {
      newsDisplay: true,
      profileDisplay: false,
      projectDisplay: false,
      projectFav: false,
      isLoggedIn: false,
      username: null
      
    }
  }

  componentWillMount() {
    let query = window.location.search.substring(1);

    if (query.length > 0) {
      let username = query.split('=')[1];
      this.setState(state => {
        state.username = username;
        state.isLoggedIn = true;
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/" exact component={MainContainer} isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
            <Route path="/login" exact component={Login}/>
         </Switch>
        </div>
       </Router>
    )
  }
}

export default App;
