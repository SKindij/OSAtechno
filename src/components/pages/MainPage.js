import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { commonImages as images } from './commonImages'; // Import the images object
import './Pages.scss';

function MainPage() {
  return (
    <main className='main-page'>

      <Helmet>
        <meta name="description"
          content="Upgrade and repair gates and roller shutters effortlessly. 
          Our web-app helps you discover accessories that offer the perfect balance of price and quality. 
          Start exploring for the best solutions."
        />
        <meta name="keywords" 
	        content="garage gates, gate spare parts, gate accessories, rollers, protective shutters, shutter control, remote controls, sectional gates, products" />
        <title>Optimal Selection Accessories</title>
        <link rel="canonical" href="https://osatechno.com/" />
      </Helmet>

      <section className="purpose-section">
        <div className="aim-content">
        <h1 className="mb-3">OSA - Optimal Selection of Accessories</h1>
        <p className="mb-3">
          Web application designed to assist 👷 users 🔍 in finding ⭐ the best in terms of price-quality ratio accessories
            for 🔧 upgrading, 🔨 repairing, or 🔱 enhancing various types of gates and roller shutters.
        </p>
      </div>
      <div className="advices-content">
          <h2>Where to start?</h2>
            <p>If you are looking for the perfect components for your gates or shutters, we have some useful tips for you.</p>
            <ol>
              <li><strong>Assess your needs:</strong> 
                Determine the specific problems you would like to solve or the features you would like to add to your gates or shutters.
              </li>
              <li><strong>Research:</strong>
                Familiarize yourself with various types of accessories that may be suitable for you. You can explore sections for residential gates, industrial gates, garage shutters, and window-door shutters.
              </li>
              <li><strong>Product selection:</strong>
                Go to the section of the chosen product group, which offers a wide range of components for various needs. 
                Review the specifications of the details for sectional gates or protective shutters. Choose the ones that suit you.
              </li>
              <li><strong>Consultation:</strong>
                If you have any questions or need additional assistance, contact specialized installation companies in your region. They provide services for inspection, maintenance, repair, and modernization of gates and shutters.
              </li>
            </ol>
            <p>Whether you decide to do it all yourself or seek help from professionals, we wish you success in choosing and improving your equipment!</p>
        </div>
      </section>

      <section className="product-groups-section">
      <Container>
        <Row xs={1} md={2} className="g-4 justify-content-center">
          <Col>
            <Card className="card-wrapper">
            <Card.Header className="card-header">Accessories for garage gates</Card.Header>
            <Link to="/residential">
              <Card.Img variant="top" src={images.residentialGate916}
                srcSet={`${images.residentialGate334} 334w, ${images.residentialGate668} 668w, ${images.residentialGate916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-group-image" alt="roller gate"
                width={916} height={692}/>               
            </Link>   
              <Card.Body>
                <Card.Title><h3>Residential type</h3></Card.Title>
                <Card.Text>Upgrade your residential gate with top-quality accessories for enhanced performance.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/residential" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header className="card-header">Accessories for garage gates</Card.Header>
              <Link to="/industrial">
              <Card.Img variant="top" src={images.industrialGate916}
                srcSet={`${images.industrialGate334} 334w, ${images.industrialGate668} 668w, ${images.industrialGate916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-group-image" alt="roller gate"
                width={916} height={692} />                   
              </Link>
              <Card.Body>
                <Card.Title><h3>Industrial type</h3></Card.Title>
                <Card.Text>Discover a wide range of accessories for industrial gates to optimize functionality and durability.</Card.Text> 
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/industrial" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header className="card-header">Accessories for protective shutters</Card.Header>
              <Link to="/garageroller">
              <Card.Img variant="top" src={images.garageRollet916}
                srcSet={`${images.garageRollet334} 334w, ${images.garageRollet668} 668w, ${images.garageRollet916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-group-image" alt="roller gate"
                width={916} height={692} />                   
              </Link>
              <Card.Body>
                <Card.Title><h3>Garage type</h3></Card.Title>
                <Card.Text>Customize your garage doors with reliable and stylish accessories for optimal functionality.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/garageroller" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrapper">
              <Card.Header className="card-header">Accessories for protective shutters</Card.Header>
              <Link to="/windowroller">
              <Card.Img variant="top" src={images.windowRollet916}
                srcSet={`${images.windowRollet334} 334w, ${images.windowRollet668} 668w, ${images.windowRollet916} 916w`}
                sizes="(min-width: 1200px) 525px, (min-width: 1000px) calc(11.11vw + 314px), (min-width: 780px) calc(5vw + 276px), (min-width: 640px) 505px, calc(93.75vw - 76px)"
                className="img-fluid img-thumbnail product-group-image" alt="roller gate"
                width={916} height={692} />                     
              </Link>
              <Card.Body>
                <Card.Title><h3>Window type</h3></Card.Title>
                <Card.Text>Explore selection of accessories to enhance the functionality and aesthetics of your window shutters.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to="/windowroller" variant="outline-success">View Accessories</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
    </main>
  );
}
export default MainPage;