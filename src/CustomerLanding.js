import React from 'react';
import { Jumbotron, Button, Container, Col } from 'reactstrap';

var DriverLanding = (props) => {
  return (<Jumbotron className="m-2 my-5">
    <Container className="text-center my-2">
      <Col className="offset-2 col-8">
        <h1 className="display-1">Welcome</h1>
        <divider/>
        <div classname="form-group my-4">
          <label className="lead" for="place-search" >Where would you like to get to?</label>
          <input type="text" placeholder="Enter a place..." id="place-search" className="form-control my-1"/>
        </div>
      </Col>
      </Container>
    </Jumbotron>);
  }

export default DriverLanding;
