import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import OrderSummary from './OrderSummary';

const OrderForm = ({ selectedProducts }) => {
  const [companyName, setCompanyName] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [orderProducts, setorderProducts] = useState(selectedProducts);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const handleDeleteProduct = (productId) => {
    const updatedSelectedProducts = selectedProducts.filter((product) => product.id !== productId);
    setorderProducts(updatedSelectedProducts);
  };
  const handleOrderSummary = () => {
    setShowOrderSummary(true); // Open a modal window
  };
  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false); // Close the modal window
  };

  return (
    <div>
      <h1>Order Form</h1>
      {/* Form for company name, user name, and phone number */}
      <Form>
        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter user name"
            onChange={(e) => setUserName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number"
            onChange={(e) => setPhoneNumber(e.target.value)} />
        </Form.Group>
      </Form>

      {selectedProducts && selectedProducts.length > 0 ? (
        <div>
          <h3>Selected Products:</h3>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - Quantity: {product.quantity} {product.unit}
                <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No products selected.</p>
      )}

      <h4>Notes to Order:</h4>
      <Form.Control as="textarea"
        rows={3} value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button onClick={handleOrderSummary}>Order Summary</Button>

      {showOrderSummary && (
        <OrderSummary
          show={showOrderSummary}
          onHide={handleCloseOrderSummary}
          selectedProducts={orderProducts}
          companyName={companyName}
          userName={userName}
          phoneNumber={phoneNumber}
          notes={notes}
      />
      )}

    </div>
  );
};
export default OrderForm;