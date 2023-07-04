import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup  } from 'react-bootstrap';

import './Common.scss';

const Footer = () => {
  const handleRegistration = (event) => {
    event.preventDefault();
    // Perform the necessary registration logic
    console.log(`User...`);
  };

  return (
    <footer className="footer">
        <Container className="mt-4" >
          <p className="mb-3">Login for registered users</p>
          <p>Provides access to professional functions on the portal.</p>
          <Form onSubmit={handleRegistration} >
          <fieldset disabled>
            <Row className="align-items-center">
              <Col md={3} className="my-1">
                <Form.Label htmlFor="formInputUsername" visuallyHidden>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Text>User:</InputGroup.Text>
                      <Form.Control id="formInputUsername" placeholder="nickname" />
                </InputGroup>
              </Col>
              <Col md={3} className="my-1">
                <Form.Label htmlFor="formInputUserPassworde" visuallyHidden>Password:</Form.Label>
                <Form.Control id="formInputUserPassword" placeholder="Password" />
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
              </Col>
              <Form.Text className="text-muted">
                You can get your login and password from the portal administrator.
              </Form.Text>
              <Col xs={6} className="my-1">
                <Button type="submit"  variant="outline-success" style={{ width: '100%' }}>Enter</Button>
              </Col>
            </Row>
          </fieldset>
          </Form>
        </Container>

        <Container className="text-center">
            <Col className="pt-4 copy">&copy; OSAtechno v.0.8.5 by SKindij {new Date().getFullYear()} </Col>
        </Container>
    </footer>
  );
};

export default Footer;
