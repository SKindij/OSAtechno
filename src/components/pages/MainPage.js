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
<<<<<<< HEAD
      <div className="header-content">
=======
      <div className="header-content d-flex justify-content-center align-items-center">
>>>>>>> 03b2f33a71625acc8594e09c63d3f994b3b3e8e2
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
<<<<<<< HEAD
              <Card.Img variant="top" src={residentialGateImg}
                 srcSet={`${residentialGateImg} 334w, ${residentialGateImg} 668w, ${residentialGateImg} 916w, ${residentialGateImg} 1068w`}
                 sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                 alt="residential gate" className="product-image"
                 style={{ width: '100%', height: 'auto' }} />
=======
              <Card.Img variant="top" src={residentialGate}
                srcSet={`${residentialGate334} 334w, ${residentialGate668} 668w, ${residentialGate916} 916w, ${residentialGate1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:991px) 668px, (max-width:1399px) 916px", 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />               
>>>>>>> 03b2f33a71625acc8594e09c63d3f994b3b3e8e2
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
<<<<<<< HEAD
              <Card.Img variant="top" src={industrialGateImg}
                 srcSet={`${industrialGateImg} 334w, ${industrialGateImg} 668w, ${industrialGateImg} 916w, ${industrialGateImg} 1068w`}
                 sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                 alt="industrial gate" className="product-image"
                 style={{ width: '100%', height: 'auto' }} />
=======
              <Card.Img variant="top" src={industrialGate}
                srcSet={`${industrialGate334} 334w, ${industrialGate668} 668w, ${industrialGate916} 916w, ${industrialGate1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:991px) 668px, (max-width:1399px) 916px", 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />                   
>>>>>>> 03b2f33a71625acc8594e09c63d3f994b3b3e8e2
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
<<<<<<< HEAD
                <Card.Img variant="top" src={garageRollesImg}
                 srcSet={`${garageRollesImg} 334w, ${garageRollesImg} 668w, ${garageRollesImg} 916w, ${garageRollesImg} 1068w`}
                 sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                   alt="roller gate" className="product-image"
                   style={{ width: '100%', height: 'auto' }} />
=======
              <Card.Img variant="top" src={garageRollet}
                srcSet={`${garageRollet334} 334w, ${garageRollet668} 668w, ${garageRollet916} 916w, ${garageRollet1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:991px) 668px, (max-width:1399px) 916px", 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />                   
>>>>>>> 03b2f33a71625acc8594e09c63d3f994b3b3e8e2
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
<<<<<<< HEAD
                <Card.Img variant="top" src={windowRolletsImg}
                   srcSet={`${windowRolletsImg} 334w, ${windowRolletsImg} 668w, ${windowRolletsImg} 916w, ${windowRolletsImg} 1068w`}
                   sizes="(max-width: 768px) 334px, (max-width: 992px) 668px, 916px"
                   alt="window roller" className="product-image"
                   style={{ width: '100%', height: 'auto' }} />
=======
              <Card.Img variant="top" src={windowRollet}
                srcSet={`${windowRollet334} 334w, ${windowRollet668} 668w, ${windowRollet916} 916w, ${windowRollet1068} 1068w`}
                sizes="(max-width:767px) 334px, (max-width:991px) 668px, (max-width:1399px) 916px", 1068px"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
              />                     
>>>>>>> 03b2f33a71625acc8594e09c63d3f994b3b3e8e2
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
