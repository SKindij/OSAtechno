import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, ButtonGroup, ButtonToolbar, InputGroup } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { BsFillBagCheckFill } from 'react-icons/bs';
import DataService from '../../services/DataService';
import ProductDetails from './ProductPage';
import './Pages.scss';

const ResidentialGatesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const [quantity, setQuantity] = useState(0);

  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const residentialProducts = await DataService.getResidentialProducts();
        setProducts(residentialProducts);
        setFilteredProducts(residentialProducts);
      } catch (error) {
        console.error('Error fetching residential products:', error);
      }
    };

    fetchProducts();
  }, [] );

  const filterProducts = (category) => {
    if (category === 'All categories') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter( (product) => product.category === category );
      setFilteredProducts(filtered);
    }
  };

  const selectProduct = (productId) => {
    setSelectedProductId(productId);
    setShowProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setSelectedProductId(null);
    setShowProductDetails(false);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10) || 0;
    const nonNegativeValue = Math.max(0, value);
    setQuantity(nonNegativeValue);
  };

  const handleAddClick = (event) => {
    event.preventDefault();
    // Handle add button click event with the quantity value
    const selectedProduct = DataService.getGatesById(selectedProductId);
    console.log(`User add ${quantity} of ${selectedProduct.name}`);
  };

  return (
    <Container>
      <h1>Accessories for residential garage doors</h1>
      <Row className="mb-4">       
        <Col>
          <ButtonToolbar aria-label="Product categories">
            <ButtonGroup className="me-2">
              <Button variant="success" onClick={() => filterProducts('All categories')}>
                All categories
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="info" onClick={() => filterProducts('On Shaft')}>
                On Shaft
              </Button>
              <Button variant="info" onClick={() => filterProducts('On Panel')}>
                On Panel
              </Button>
              <Button variant="info" onClick={() => filterProducts('Railsystem')}>
                Railsystem
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row>
      {filteredProducts.map( (product) => (
        <Col key={product.id} xs={12} md={6} lg={4} xl={3}>
          <Card className={`product-card ${selectedProductId === product.id ? 'product-card-highlight' : ''}`}
            onClick={() => selectProduct(product.id)}>
            <Card.Header>{product.name}</Card.Header>
            <div className="product-image-container">
              <Card.Img className="product-image" variant="top" src={product.imageA} />
            </div>
            <Card.Body>
              <Card.Text>Article: {product.article}</Card.Text>
              <Card.Text>Price: {product.price}€</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col>
                  <Form.Group controlId={`quantity_${product.id}`}>
                  <InputGroup>
                    <Form.Control aria-label="Need for spare parts"
                      type="number" min={0} step={1} pattern="[0-9]+"
                      inputMode="numeric"
                      onChange={handleQuantityChange}
                    />
                    <InputGroup.Text>{product.unit}</InputGroup.Text>
                  </InputGroup>
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="outline-secondary" 
                    onClick={handleAddClick}>
                    <BsFillBagCheckFill />
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-success" 
                    onClick={() => selectProduct(product.id)}>
                    <FaEye />
                  </Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      ) )}        
      </Row>
      {selectedProductId && showProductDetails && (
        <ProductDetails onClose={handleCloseProductDetails} />
      )}
    </Container>
  );
};

export default ResidentialGatesPage;