import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Card, Form, ButtonGroup, ButtonToolbar, InputGroup } from 'react-bootstrap';
import { FaEye, FaMedapps } from 'react-icons/fa';
import { BsFillBagPlusFill, BsFillInfoCircleFill } from 'react-icons/bs';
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
        const industrialProducts = await DataService.getIndustrialProducts();
        setProducts(industrialProducts);
        setFilteredProducts(industrialProducts);
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
          content="Browse our selection of durable industrial gates. 
          Find the perfect solution for warehouses, factories, and commercial properties."
        />
        <meta name="keywords" 
	        content="industrial gates, commercial gates, warehouse gates, factory gates, durable gates" />
        <title>Industrial gates</title>
        <link rel="canonical" href="https://osatechno.com/industrial" />
      </Helmet>

    <section className="products-section">  
    <Container className={ `${showProductDetails ? 'blur' : ''}` }>
      <h1 className="text-center">Accessories for industrial sectional doors</h1>
      <Row className="mb-4">       
        <Col>
          <ButtonToolbar aria-label="Product categories">
            <ButtonGroup className="me-2">
              <Button variant="success" aria-label="Filter All categories"
                  onClick={() => filterProducts('All categories')} >
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
                width="400" height="225" />
            </div>
            <Card.Body>
              <Card.Text>Article: {product.article}</Card.Text>
              <Card.Text>Price: {product.price} €</Card.Text>
            </Card.Body>
            <Card.Footer>
                    <Row>
                      <Col xs={7} md={8}>
                        <Form.Group controlId={`quantity_${product.id}`}>
                          <InputGroup>
                            <Form.Control aria-label="Need for spare parts"
                              type="number" min={0} step={1} pattern="[0-9]+"
                              inputMode="numeric" className="quantity-input"
                              value={quantity === 0 ? '' : quantity}
                              onChange={(event) => handleQuantityChange(event, product.id)}
                              onKeyPress={(event) => {
                                if (event.key === '+' || event.key === '-') {
                                  event.preventDefault();
                                }
                              }}
                            />
                            <InputGroup.Text>{product.unit}</InputGroup.Text> 
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col xs={5} md={4} >
                        <Button variant='success' className="add-button"
                            onClick={(event) => handleAddClick(event, product.id)}
                            aria-label="Add item to Selected Products">
                            <BsFillBagPlusFill />
                        </Button>
                      </Col>    
                      <Col xs={8} md={6} >
                        <Button variant="info" className="view-button"
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
          Open window with order form
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
          <h3>Care and maintenance of industrial gates...<BsFillInfoCircleFill /></h3>
        </Accordion.Header>
        <Accordion.Body>
        <p>Industrial sectional gates are an essential component of many commercial and industrial facilities.
          Proper care and maintenance of these gates are crucial for their reliable and efficient operation, ensuring the security and productivity of your business.</p>
        <h4 className="text-center">Here are some important guidelines for caring for your industrial sectional gates:</h4>
        <ol>
          <li><FaMedapps/>Regularly inspect the gates for any signs of wear, damage, or misalignment. Addressing issues promptly can prevent further damage and potential operational disruptions.</li>
          <li><FaMedapps/>Clean the gates regularly to remove dirt, debris, and corrosive substances. Use a mild detergent and a soft cloth or sponge to clean the gate panels, tracks, and hardware. Avoid using abrasive cleaners that can scratch or damage the gate surface.</li>
          <li><FaMedapps/>Lubricate all moving parts of the gate, including hinges, rollers, and tracks. Use a high-quality lubricant recommended by the gate manufacturer. Proper lubrication reduces friction, extends the lifespan of the components, and ensures smooth gate operation.</li>
          <li><FaMedapps/>Check the safety features of the gate, such as sensors and emergency stop buttons, to ensure they are functioning correctly. Regularly test these safety mechanisms to guarantee the protection of employees and equipment.</li>
          <li><FaMedapps/>Inspect the gate's electrical components, such as control panels and motors, for any signs of damage or malfunction. Electrical issues can affect the gate's performance and compromise its safety. If you notice any problems, contact a qualified technician for repairs.</li>
          <li><FaMedapps/>Schedule regular professional maintenance and inspections to identify potential issues early on and prevent costly repairs or downtime. Professional technicians can assess the gate's condition, make necessary adjustments, and perform preventive maintenance tasks.</li>
        </ol>
        <p>By following these care and maintenance practices, you can optimize the performance, durability, and safety of your industrial sectional gates.</p>
        <p>Remember to consult the manufacturer's guidelines and seek professional assistance whenever needed to ensure the proper care of your gates.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </section>
    </main>
  );
};
export default ResidentialGatesPage;
