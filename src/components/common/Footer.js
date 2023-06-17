import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup  } from 'react-bootstrap';

const Footer = () => {
  const handleRegistration = (event) => {
    event.preventDefault();
    // Perform the necessary registration logic
    console.log(`User...`);
  };

  return (
    <footer className="footer">
        <Container className="mt-4" >
          <h4 className="mb-3">Login for registered users</h4>
          <p>Provides access to professional functions on the portal.</p>
          <Form onSubmit={handleRegistration}>
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
                    <Form.Text className="text-muted">
                      You can get your login and password from the portal administrator.
                    </Form.Text>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Button type="submit">Enter</Button>
                  </Col>
                </Row>
              </Form>
            </Container>

            <Container>
               <Col>&copy; {new Date().getFullYear()} SKindij</Col>
            </Container>
    </footer>
  );
};

export default Footer;
