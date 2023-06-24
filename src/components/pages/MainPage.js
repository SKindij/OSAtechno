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
            <Card.Header>Accessories for garage gates</Card.Header>
            <Link to="/residential">
              <Card.Img variant="top" src={images.residentialGate916}
                srcSet={`${images.residentialGate334} 334w, ${images.residentialGate668} 668w, ${images.residentialGate916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
                width={916} height={692}/>               
            </Link>   
              <Card.Body>
                <Card.Title>Residential type</Card.Title>
                <Card.Text>Upgrade your residential gate with top-quality accessories for enhanced performance.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/residential" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header>Accessories for garage gates</Card.Header>
              <Link to="/industrial">
              <Card.Img variant="top" src={images.industrialGate916}
                srcSet={`${images.industrialGate334} 334w, ${images.industrialGate668} 668w, ${images.industrialGate916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
                width={916} height={692} />                   
              </Link>
              <Card.Body>
                <Card.Title>Industrial type</Card.Title>
                <Card.Text>Discover a wide range of accessories for industrial gates to optimize functionality and durability.</Card.Text> 
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/industrial" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header>Accessories for protective shutters</Card.Header>
              <Link to="/garageroller">
              <Card.Img variant="top" src={images.garageRollet916}
                srcSet={`${images.garageRollet334} 334w, ${images.garageRollet668} 668w, ${images.garageRollet916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
                width={916} height={692} />                   
              </Link>
              <Card.Body>
                <Card.Title>Garage type</Card.Title>
                <Card.Text>Customize your garage doors with reliable and stylish accessories for optimal functionality.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/garageroller" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header>Accessories for protective shutters</Card.Header>
              <Link to="/windowroller">
              <Card.Img variant="top" src={images.windowRollet916}
                srcSet={`${images.windowRollet334} 334w, ${images.windowRollet668} 668w, ${images.windowRollet916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-image" alt="roller gate"
                width={916} height={692} />                     
              </Link>
              <Card.Body>
                <Card.Title>Window type</Card.Title>
                <Card.Text>Explore selection of accessories to enhance the functionality and aesthetics of your window shutters.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/windowroller" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainPage;