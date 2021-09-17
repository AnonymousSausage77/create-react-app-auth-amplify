import React from 'react';
import { Jumbotron, Button, Container, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

var AppJumbotron = (props) => {
  return (<><Jumbotron className="m-2 pt-5 my-5">
    <Container className="text-center my-2">
      <Col className="offset-2 col-8">
        <h1 className="display-1">NÜBER</h1>
        <p className="lead">Like Uber - But Nëwer</p>
        <hr className="my-2" />
        <p>Spreading to your neighbourhood soon!</p>
      </Col>
      </Container>
    </Jumbotron>
  </>);
  }

export default AppJumbotron;
