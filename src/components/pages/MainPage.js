import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { images } from './images'; // Import the images object
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
              <Card.Img variant="top" src={images.residentialGate916}
                srcSet={`${images.residentialGate334} 334w, ${images.residentialGate668} 668w, ${images.residentialGate916} 916w, ${images.residentialGate1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:1199px) 668px, (max-width:1399px) 916px, 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />               
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
              <Card.Img variant="top" src={images.industrialGate916}
                srcSet={`${images.industrialGate334} 334w, ${images.industrialGate668} 668w, ${images.industrialGate916} 916w, ${images.industrialGate1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:1199px) 668px, (max-width:1399px) 916px, 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />                   
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
              <Card.Img variant="top" src={images.garageRollet916}
                srcSet={`${images.garageRollet334} 334w, ${images.garageRollet668} 668w, ${images.garageRollet916} 916w, ${images.garageRollet1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:1199px) 668px, (max-width:1399px) 916px, 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />                   
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
              <Card.Img variant="top" src={images.windowRollet916}
                srcSet={`${images.windowRollet334} 334w, ${images.windowRollet668} 668w, ${images.windowRollet916} 916w, ${images.windowRollet1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:1199px) 668px, (max-width:1399px) 916px, 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />                     
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