import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Card, Form, ButtonGroup, ButtonToolbar, InputGroup } from 'react-bootstrap';
import { FaEye, FaMedapps } from 'react-icons/fa';
import { BsFillBadgeAdFill, BsFillInfoCircleFill } from 'react-icons/bs';
import DataService from '../../services/DataService';
import OrderForm from '../order/OrderForm';
import ProductDetails from './ProductDetails';
import Accordion from 'react-bootstrap/Accordion';
import './Pages.scss';

const ResidentialGatesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);	
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);	
  const [selectedProductQuantities, setSelectedProductQuantities] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
// function of obtaining goods from database
  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const residentialProducts = await DataService.getResidentialProducts();
        setProducts(residentialProducts);
        setFilteredProducts(residentialProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [] );
// functionality of filtering groups of accessories
  const filterProducts = (category) => {
    if (category === 'All categories') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter( (product) => product.category === category );
      setFilteredProducts(filtered);
    }
  };
// functions of managing modal window of additional info about product
  const selectProductId = (productId) => {
    setSelectedProductId(productId);
  };
  const handleOpenProductDetails = (productId) => {
    setSelectedProductId(productId);
    setShowProductDetails(true);
  };
  const handleCloseProductDetails = () => {
    setShowProductDetails(false);
  };
// Update the quantity variable when the quantity changes
const handleQuantityChange = useCallback( (event, productId) => {
  const value = parseInt(event.target.value, 10) || 0;
  // Create a new object with the updated product quantity for the current ID
  const updatedQuantities = {
    ...selectedProductQuantities,
    [productId]: value,
  };
  setSelectedProductQuantities(updatedQuantities);
}, [] );
// functionality for collecting desired goods
  const handleAddClick = async (event, productId) => {
    event.preventDefault();
    try {
      const selectedProduct = await DataService.getGatesById(productId);
      const quantity = selectedProductQuantities[productId] || 0;
     // Checking that zero-quantity items are not added
     if (quantity !== 0) {
      // Updating the list of selected products
      const updatedSelectedProducts = [...selectedProducts];
      const existingProductIndex = updatedSelectedProducts.findIndex(
        (product) => product.id === productId
      );
      if (existingProductIndex !== -1) {
        // The product already exists, check if the quantity is different
        if (updatedSelectedProducts[existingProductIndex].quantity !== quantity) {
          updatedSelectedProducts[existingProductIndex].quantity = quantity;
        }
      } else {
        // Add a new product to the list
        updatedSelectedProducts.push({
          id: productId,
          name: selectedProduct.name,
          article: selectedProduct.article,
          price: selectedProduct.price,
          quantity: quantity,
          unit: selectedProduct.unit,
        });
      }
      setSelectedProducts(updatedSelectedProducts);
      console.log(`User add ${quantity} of ${selectedProduct.name}`);
     }
    } catch (error) {
      console.error('Error fetching selected product:', error);
    }
  };
// functions of managing modal window of order form
  const handleOpenOrderForm = () => {   
    setShowOrderForm(true);
  };
  const handleCloseOrderForm = () => {   
    setShowOrderForm(false);
  };
// clear all fields and remove visual effects from buttons
  const handleClearSelectedAccessories = () => {
    setSelectedProductQuantities({});
    setSelectedProducts([]);
  };

  return (
    <main className='gates-page'>

      <Helmet>
        <meta name="description"
          content="Discover our collection of high-quality residential gates. Choose from various designs and materials. 
          Enhance the security and aesthetics of your home. Request a quote now!"
        />
        <meta name="keywords" 
	        content="residential gates, home gates, gate designs, gate materials, security gates" />
        <title>Residential gates</title>
        <link rel="canonical" href="https://osatechno.com/residential" />
      </Helmet>

    <section className="products-section">
    <Container className={ `${showProductDetails ? 'blur' : ''}` }>
      <h1 className="text-center">Accessories for residential garage doors</h1>
      <Row className="mb-4">       
        <Col>
          <ButtonToolbar aria-label="Product categories">
            <ButtonGroup className="me-2">
              <Button variant="success" 
                  onClick={() => filterProducts('All categories')} className="me-2">
                  All categories
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="info" aria-label="Filter On Shaft"
                  onClick={() => filterProducts('On Shaft')} className="me-2">
                  On Shaft
              </Button>{' '}
              <Button variant="info" aria-label="Filter On Panel"
                  onClick={() => filterProducts('On Panel')} className="me-2">
                  On Panel
              </Button>{' '}
              <Button variant="info" aria-label="Filter for Railsystem"
                  onClick={() => filterProducts('Railsystem')} className="me-2">
                  Railsystem
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row>	
       {filteredProducts.map( (product) => {        
         const quantity = selectedProductQuantities[product.id] || 0;
        return (
        <Col key={product.id} xs={12} md={6} lg={4} xl={3}>
          <Card className={`product-card ${selectedProductId === product.id ? 'card-highlight' : ''}`}
            onClick={() => selectProductId(product.id)}
          >
            <Card.Header className="card-header">{product.name}</Card.Header>
            <div className="product-img-container">
              <Card.Img className="product-image" variant="top" 
                src={product.imageA} alt={product.name}
                width="400" height="225"/>
            </div>
            <Card.Body>
              <Card.Text>Article: {product.article}</Card.Text>
              <Card.Text>Price: {product.price}€</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col xs={12} md={9}>
                  <Form.Group controlId={`quantity_${product.id}`}>
                  <InputGroup>
                    <Form.Control aria-label="Need for spare parts"
                      type="number" min={0} step={1} pattern="[0-9]+"
                      inputMode="numeric"
                      value={quantity === 0 ? '' : quantity}
                      onChange={(event) => handleQuantityChange(event, product.id)}
                      onKeyPress={(event) => {
                        if (event.key === '+' || event.key === '-') {
                          event.preventDefault();
                        }
                      }}
                    />
                    <InputGroup.Text>{product.unit}</InputGroup.Text>
                    <Button variant='outline-warning'
                      onClick={(event) => handleAddClick(event, product.id)}
                      aria-label="Add item to Selected Products">
                        <BsFillBadgeAdFill />
                    </Button>
                  </InputGroup>
                  </Form.Group>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center">
                  <Button variant="outline-success"
                    onClick={() => handleOpenProductDetails(product.id)}
                    aria-label="Open product details">
                    <FaEye />
                  </Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
       );
      } )}        
      </Row>
      {selectedProductId && showProductDetails && (
        <ProductDetails 
          onClose={handleCloseProductDetails} 
          productId={selectedProductId} />
      )}
        </Container>
      </section>

      <section className="order-section">
      <Container className={ `${showProductDetails ? 'blur' : ''}` }>
        <h2 className="text-center">Completion of the order form to the supplier</h2>
        <div className="d-grid gap-2">
        <Button variant="outline-success" size="lg"
            onClick={() => handleOpenOrderForm()}
            aria-label="Open windwow with order form">
            Open windwow with order form
        </Button>
        <Button variant="outline-danger" size="lg"
            onClick={handleClearSelectedAccessories}>
            Clear the list of selected accessories
        </Button>
        </div>             
          {showOrderForm && (
            < OrderForm 
                onClose={handleCloseOrderForm} 
                selectedProducts={selectedProducts} 
                setSelectedProducts={setSelectedProducts} />
          )} 
        <Accordion>
        <Accordion.Item eventKey="0" className='text-center'>
        <Accordion.Header>
          <h3> Care and maintenance of residential gates...<BsFillInfoCircleFill /></h3>
        </Accordion.Header>
        <Accordion.Body>
          <p>Residential garage doors require regular care and maintenance to ensure their efficient operation and longevity.</p>
          <h4>Here are a few helpful tips for caring for your doors:</h4>
          <ol>
            <li><FaMedapps />Regularly clean the doors from dirt and dust. Use a soft cloth or sponge with a mild detergent to remove any debris from the surface of the doors.</li>
            <li><FaMedapps />Periodically check the condition of the weatherstripping and seals. Replace any damaged weatherstripping to ensure proper insulation.</li>
            <li><FaMedapps />Lubricate the moving parts of the doors, such as rollers and hinges, using a specialized silicone lubricant. Avoid using oil-based lubricants as they can attract dirt and dust.</li>
            <li><FaMedapps />Check the operation of the automatic door opener and its components. Repair or replace any malfunctions to avoid breakdowns or safety hazards.</li>
          </ol>
          <p>Remember to also schedule regular professional servicing for your doors. Reach out to experts if you encounter any issues or require professional maintenance.</p>
          <p>By keeping your doors in good condition and taking care of regular maintenance, you will ensure functionality, and longevity of your residential garage doors.</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>  
        </Container>
        </section>
    </main>
  );
};
export default ResidentialGatesPage;
