import React from 'react';
import { Jumbotron, Button, Container, Col } from 'reactstrap'
import FileUpload from './FileUpload.js'

var DriverLanding = (props) => {
  return (
    <Jumbotron className="m-2 my-5">
      <Container className="text-center my-2">
        <Col className="offset-2 col-8">
          <h1 className="display-1">Welcome</h1>
          <p className="lead">Are you ready to drive?</p>
          <FileUpload />

        </Col>
      </Container>
    </Jumbotron>);
  }

export default DriverLanding;
