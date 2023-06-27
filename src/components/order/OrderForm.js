import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

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

  const getTotalQuantity = () => {
    return selectedProducts.reduce( (total, product) => total + product.quantity, 0 );
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handlePrint = () => {
    // Handle print functionality
    console.log("Print the Order")
  };

  const handleSave = () => {
    // Handle save functionality
    console.log("Save the Order as PDF file.")
  };

  return (
    <Modal show={show} onHide={onHide}
      backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>
        <Modal.Body>     
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
          <p>Selected Products:<p>
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

      <p>Notes to Order:<p>
      <Form.Control as="textarea"
        rows={3} value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      </Modal.Body>
      <Modal.Footer>
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Price: {getTotalPrice()}</p>
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleSave}>Save</Button>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      
  );
};
export default OrderForm;
