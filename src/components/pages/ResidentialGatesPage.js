import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import DataService from './DataService';

const ResidentialGatesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  useEffect(() => {
    const fetchProducts = async () => {
      // Get residential and common products from DataService
      const residentialProducts = DataService.getResidentialProducts();
      setProducts(residentialProducts);
      setFilteredProducts(residentialProducts);
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'All categories') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.categories === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary" onClick={() => filterProducts('All categories')}>
            All categories
          </Button>
          <Button variant="secondary" onClick={() => filterProducts('On Shaft')}>
            On Shaft
          </Button>
          <Button variant="secondary" onClick={() => filterProducts('On Panel')}>
            On Panel
          </Button>
          <Button variant="secondary" onClick={() => filterProducts('Railsystem')}>
            Railsystem
          </Button>
        </Col>
      </Row>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Img variant="top" src={product.imageA} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.article}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Form.Group controlId={`quantity_${product.id}`}>
                  <Form.Control type="number" min="1" defaultValue="1" />
                </Form.Group>
                <Button variant="primary">Add</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResidentialGatesPage;
