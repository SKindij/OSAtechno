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
      <div className="header-content">
        <h1 className="mb-3">OSA - Optimal Selection of Accessories</h1>
        <p className="mb-3">
          Web application 🔮 designed to assist 👷 users 🔍 in finding ⭐ the best in terms of price-quality ratio accessories
            for 🔧 upgrading, 🔨 repairing, or 🔱 enhancing various types of gates and roller shutters.
        </p>
      </div>
      <Container>
        <Row xs={1} md={2} className="g-4 justify-content-center">
          <Col>
            <Card className="card-wrapper">
            <Card.Header>Garage gates</Card.Header>
            <Link to="/residential">
              <Card.Img variant="top" src={residentialGateImg}
                 srcSet={`${residentialGateImg} 334w, ${residentialGateImg} 668w, ${residentialGateImg} 916w, ${residentialGateImg} 1068w`}
                 sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                 alt="residential gate" className="product-image"
                 style={{ width: '100%', height: 'auto' }} />
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
                 srcSet={`${industrialGateImg} 334w, ${industrialGateImg} 668w, ${industrialGateImg} 916w, ${industrialGateImg} 1068w`}
                 sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                 alt="industrial gate" className="product-image"
                 style={{ width: '100%', height: 'auto' }} />
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
                 srcSet={`${garageRollesImg} 334w, ${garageRollesImg} 668w, ${garageRollesImg} 916w, ${garageRollesImg} 1068w`}
                 sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                   alt="roller gate" className="product-image"
                   style={{ width: '100%', height: 'auto' }} />
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
                   srcSet={`${windowRolletsImg} 334w, ${windowRolletsImg} 668w, ${windowRolletsImg} 916w, ${windowRolletsImg} 1068w`}
                   sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                   alt="window roller" className="product-image"
                   style={{ width: '100%', height: 'auto' }} />
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
