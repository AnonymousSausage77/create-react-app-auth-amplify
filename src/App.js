import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

import { Jumbotron, Button, Container, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AppJumbotron from './AppJumbotron.js';

class App extends Component {
  render() {
    return (
      <div className="App pb-4 html" >
        <AmplifySignOut />
        <AppJumbotron />
      </div>
    );
  }
}

export default withAuthenticator(App);
