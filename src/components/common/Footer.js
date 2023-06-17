import React from 'react';
import vcss from '../../resources/commonImages/vcss.gif';
import { Container, Row, Col  } from 'react-bootstrap';
import { Form, Button, InputGroup } from 'react-bootstrap';

const Footer = () => {
  const handleRegistration = (event) => {
    event.preventDefault();
    // Виконайте необхідну логіку реєстрації
    console.log(`User...`);
  };

  return (
    <footer className="footer">
        <Container className="mt-4" >
          <h4>Login for registered users</h4>
          <p>Provides access to professional functions on the portal.</p>
          <Form onSubmit={handleRegistration}>
            <Row className="align-items-center">
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="formInputUsername" visuallyHidden>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Text>User:</InputGroup.Text>
                      <Form.Control id="formInputUsername" placeholder="nickname" />
                    </InputGroup>
                  </Col>
                  <Col sm={3} className="my-1">
                    <Form.Label htmlFor="formInputUserPassworde" visuallyHidden>Password:</Form.Label>
                    <Form.Control id="formInputUserPassword" placeholder="Password" />
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
