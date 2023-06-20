import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import residentialGateImg from '../../resources/commonImages/residential-gate-image.png';
import industrialGateImg from '../../resources/commonImages/industrial-gate-image.png';
import garageRollesImg from '../../resources/commonImages/garage-roller-shutter.png';
import windowRolletsImg from '../../resources/commonImages/window-roller-shutter.png';

import './Pages.scss';

function MainPage() {
  return (
    <main className='main-page'>
      <Container>
        <Row xs={1} md={2} className="g-4 justify-content-center">
          <Col>
            <Card className="card-wrapper">
            <Card.Header>Garage gates</Card.Header>
            <Link to="/residential">
              <Card.Img variant="top" src={residentialGateImg}
                 alt="residential gate" className="product-image" />
            </Link>   
              <Card.Body>
                <Card.Title>Residential type</Card.Title>
                <Card.Text>Explore our range of residential gates.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/residential" variant="outline-info">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header>Garage gates</Card.Header>
              <Link to="/industrial">
              <Card.Img variant="top" src={industrialGateImg}
                 alt="industrial gate" className="product-image" />
              </Link>
              <Card.Body>
                <Card.Title>Industrial type</Card.Title>
                <Card.Text>Discover our selection of industrial gates.</Card.Text> 
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/industrial" variant="outline-info">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header>Roller gates</Card.Header>
              <Link to="/garageroller">
                <Card.Img variant="top" src={garageRollesImg}
                   alt="roller gate" className="product-image" />
              </Link>
              <Card.Body>
                <Card.Title>Residential type</Card.Title>
                <Card.Text>Explore our range of garage roller shutters.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/garageroller" variant="outline-info">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header>Aluminum shutters</Card.Header>
              <Link to="/windowroller">
                <Card.Img variant="top" src={windowRolletsImg}
                   alt="window roller" className="product-image"/>
              </Link>
              <Card.Body>
                <Card.Title>Residential type</Card.Title>
                <Card.Text>Discover our selection of window roller shutters.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/windowroller" variant="outline-info">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainPage;
