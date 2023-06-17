import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import residentialGateImg from '../../resources/commonImages/residential-gate-image.png';
import industrialGateImg from '../../resources/commonImages/industrial-gate-image.png';
import garageRollesImg from '../../resources/commonImages/garage-roller-shutter.png';
import windowRolletsImg from '../../resources/commonImages/window-roller-shutter.png';



function MainPage() {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4 justify-content-center">
        <Col>
          <Card>
            <Card.Img variant="top" src={residentialGateImg} />
            <Card.Body>
              <Card.Title>Residential Gates</Card.Title>
              <Card.Text>Explore our range of residential gates.</Card.Text>
              <Button as={Link} to="/residential" variant="primary">View Residential Gates</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={industrialGateImg} />
            <Card.Body>
              <Card.Title>Industrial Gates</Card.Title>
              <Card.Text>Discover our selection of industrial gates.</Card.Text>
              <Button as={Link} to="/industrial" variant="primary">View Industrial Gates</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 justify-content-center">
        <Col>
          <Card>
            <Card.Img variant="top" src={garageRollesImg} />
            <Card.Body>
              <Card.Title>Garage Roller Shutters</Card.Title>
              <Card.Text>Discover our selection of garage roller shutters.</Card.Text>
              <Button as={Link} to="/garageroller" variant="primary">View Garage Roller Shutters</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={windowRolletsImg} />
            <Card.Body>
              <Card.Title>Window Roller Shutters</Card.Title>
              <Card.Text>Discover our selection of window roller shutters.</Card.Text>
              <Button as={Link} to="/windowroller" variant="primary">View Window Roller Shutters</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;

