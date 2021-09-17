import React from 'react';
import { Jumbotron, Button, Container, Col, Row, Card, CardDeck, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

var DriverLanding = (props) => {
  return (<Jumbotron className="m-2 my-5">
    <Container className="text-center my-2">
      <Col className="offset-2 col-8">
        <h1 className="display-1">Welcome to the Management Console</h1>
        <p  className="lead">What would you like to do?</p>
      </Col>
      <Row className="container">
          <Card className="col-4">
            <CardBody>
              <CardTitle tag="h5">Manage Users</CardTitle>
              <CardText>Add or remove users. View user accounts and statistics. Review user account issues.</CardText>
              <Button>Begin here</Button>
            </CardBody>
          </Card>
          <Card className="col-4">
            <CardBody>
              <CardTitle tag="h5">Reports</CardTitle>
              <CardText>Develop reports and submit them; timesheets, issue reports, and statistical analysis.</CardText>
              <Button>Begin here</Button>
            </CardBody>
          </Card>
          <Card className="col-4">
            <CardBody>
              <CardTitle tag="h5">Manage Meetings</CardTitle>
              <CardText>Review current meeting calendar. Establish new meetings. Connect with other administrators.</CardText>
              <Button>Begin here</Button>
            </CardBody>
          </Card>
      </Row>
      </Container>
    </Jumbotron>);
  }

export default DriverLanding;
