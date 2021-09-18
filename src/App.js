import React, { Component } from 'react';
import logo from './logo.svg';

import AppJumbotron from './AppJumbotron.js';
import AppNavbar from './Navbar.js';
//import DriverLanding from './DriverLanding.js';
//import CustomerLanding from './CustomerLanding.js';
//import AdminLanding from './AdminLanding.js';

import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
      <div className="App">
    //    <Router>
      //    <AppNavbar />
      //    <Switch>
        //    <Route exact path="/" component={AppJumbotron}/>
            //<Route path="/driver" component={DriverLanding} />
            //<Route path="/user" component={CustomerLanding} />
            //<Route path="/admin" component={AdminLanding} />
        //  </Switch>
      //  </Router>
      </div>
    );
  }
}

export default withAuthenticator(App);
