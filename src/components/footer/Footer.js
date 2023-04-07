import React from 'react';
import vcss from './vcss.gif';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <p><em>Copyright © 2021 SKindij</em></p>
          </Col>
          <Col md={6} className="text-right">
            <img src={vcss} alt="Proper CSS!" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
