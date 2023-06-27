import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const OrderForm = ({ selectedProducts, setSelectedProducts, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  const handleDeleteProduct = (productId) => {
    const updatedSelectedProducts = selectedProducts.filter(
      (product) => product.id !== productId
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const getTotalQuantity = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.quantity, 0
    );
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity, 0
    );
  };

  const handlePrint = () => {
    const orderContent = `
      Company Name: ${companyName}
      User Name: ${userName}
      Phone Number: ${phoneNumber}
      
      Selected Products:
      ${selectedProducts
        .map(
          (product) =>
            `${product.name} ${product.article} ${product.quantity} ${product.unit}`
        )
        .join('<br />')}
      
      Notes to Order:
      ${notes}
      
      Total Quantity: ${getTotalQuantity()}
      Total Price: ${getTotalPrice().toFixed(2)}
    `;

    // Handle print functionality
    console.log('Print the Order');
    console.log(orderContent);
  };

  const handleSave = () => {
    // Handle save functionality
    console.log('Save the Order as PDF file.');
  };

  return (
    <Modal
      show={true}
      onHide={onClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Form for company name, user name, and phone number */}
        <Form>
          <Form.Group controlId='companyName'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control type='text' placeholder='Enter company name'
              value={companyName} required
              onChange={(e) => setCompanyName(e.target.value)} 
            />
          </Form.Group>
          <Form.Group controlId='userName'>
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' placeholder='Enter user name'
              value={userName} required
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='phoneNumber'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='tel' placeholder='Enter phone number'
              value={phoneNumber} required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
        </Form>

        {selectedProducts && selectedProducts.length > 0 ? (
          <div>
            <p>Selected Products:</p>
            <ul>
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  {product.name} - Quantity: {product.quantity} {product.unit}
                  <span onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No products selected.</p>
        )}

        <p>Notes to Order:</p>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Price: {getTotalPrice().toFixed(2)}</p>
        <Button variant="outline-light"
          disabled={selectedProducts.length === 0}
          onClick={handlePrint}>
            Print
        </Button>
        <Button variant="outline-light"
          disabled={selectedProducts.length === 0}
          onClick={handleSave}>
            Save
        </Button>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderForm;