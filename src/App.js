import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

import { Jumbotron, Button, Container, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AppNavbar from './Navbar.js';
import AppJumbotron from './AppJumbotron.js';
import AppSignin from './AppSignin.js';
import DriverLanding from './DriverLanding.js';
import CustomerLanding from './CustomerLanding.js';
import AdminLanding from './AdminLanding.js';

class App extends Component {
  render() {
    return (
      <div className="App pb-4 html" >
        <AmplifySignOut />
        <Router>
          <Switch>
            <Route exact path="/" component={AppJumbotron}/>
            <Route path="/sign-in" component={AppSignin} />
            <Route path="/driver" >
              <AppNavbar/>
              <DriverLanding />
            </Route>
            <Route path="/user" >
              <AppNavbar/>
              <CustomerLanding/>
            </Route>
            <Route path="/admin" >
              <AppNavbar/>
              <AdminLanding/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuthenticator(App);
