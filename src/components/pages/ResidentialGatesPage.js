import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import GatesDatabase from "../../database/GatesDatabase";

const ResidentialGatesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/residential/${productId}`);
  };

  const handleReplaceClick = () => {
    navigate('/residential', { replace: true });
  };

  return (
    <Container>
      <Row>
        {GatesDatabase.products.map(product => (
          <Col key={product.id} xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={product.imageA} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResidentialGatesPage;
