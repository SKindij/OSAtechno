import React, { useState } from 'react';
import { Form, Button, Modal, ButtonGroup } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';

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
      Company: ${companyName}
      User: ${userName}
      Phone: ${phoneNumber}     
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
    <Modal show={true} onHide={onClose}
      backdrop='static' keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form for company name, user name, and phone number */}
        <Form>
          <Form.Group controlId='companyName' className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type='text' placeholder='Enter company name' 
              value={companyName} required size="sm"
              onChange={(e) => setCompanyName(e.target.value)} 
            />
          </Form.Group>
          <Form.Group controlId='userName' className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' placeholder='Enter user name'
              value={userName} required size="sm"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='phoneNumber' className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='tel' placeholder='Enter phone number'
              value={phoneNumber} required size="sm"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your data with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
        <br />
        {selectedProducts && selectedProducts.length > 0 ? (
          <div>
            <p style={{ fontWeight: 'bold' }}>Selected Products:</p>
            <ul>
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  {product.name} {product.article} - {product.quantity} {product.unit}
                  <Button variant="danger" size="sm" style={{ marginLeft: '10px' }}
                    onClick={() => handleDeleteProduct(product.id)}>
                      <RiDeleteBinLine />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p style={{ fontWeight: 'bold' }}>No products selected.</p>
        )}
        <br />
        <p style={{ fontWeight: 'bold' }}>Notes to Order:</p>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
          <p>Total Quantity: {getTotalQuantity()}</p>
          <p>Total Price: {getTotalPrice().toFixed(2)} €</p>
      </Modal.Body>
      <Modal.Footer>
  <div className="d-flex justify-content-between w-100">
    <div>
      <ButtonGroup aria-label="First group">
        <Button variant="light" aria-label="Print the order"
          disabled={selectedProducts.length === 0}
          onClick={handlePrint}>
          Print
        </Button>
        <Button variant="light" aria-label="Save the order"
          disabled={selectedProducts.length === 0}
          onClick={handleSave}>
          Save
        </Button>
      </ButtonGroup>
    </div>
    <div>
      <ButtonGroup aria-label="Second group">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </ButtonGroup>
    </div>
  </div>
</Modal.Footer>
    </Modal>
  );
};

export default OrderForm;