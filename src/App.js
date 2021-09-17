import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

import AppJumbotron from './AppJumbotron.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <AppJumbotron />
      </div>
    );
  }
}

export default withAuthenticator(App);
