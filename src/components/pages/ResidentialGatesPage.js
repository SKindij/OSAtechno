import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import DataService from '../../services/DataService';
import { FaEye } from 'react-icons/fa';
import './Pages.scss'; // Import the styles

const ResidentialGatesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const residentialProducts = DataService.getResidentialProducts();
        setProducts(residentialProducts);
        setFilteredProducts(residentialProducts);
      } catch (error) {
        console.error('Error fetching residential products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    if (category === 'All categories') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const selectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
    console.log(product.name);
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
        {filteredProducts.map( (product) => (
          <Col key={product.id} xs={12} md={6} lg={4} xl={3}>
            <Card
              className={`product-card ${selectedProduct && selectedProduct.id === product.id ? 'product-card-highlight' : ''}`}
              onClick={() => selectProduct(product.id)}
            >
              <Card.Img className="product-image" variant="top" src={product.imageA} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.article}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Row>
                  <Col>
                    <Form.Group controlId={`quantity_${product.id}`}>
                      <Form.Control type="number" min="1" defaultValue="1" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button variant="outline-secondary">Add</Button>
                  </Col>
                  <Col>
                    {/* Eye icon */}
                   <Button variant="light"><FaEye /></Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ) )}
      </Row>
    </Container>
  );
};

export default ResidentialGatesPage;