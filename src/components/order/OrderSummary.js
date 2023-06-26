import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const OrderSummary = ( { selectedProducts, show, onHide, companyName, userName, phoneNumber, notes } ) => {
  if (!selectedProducts || selectedProducts.length === 0) {
    return <p>No selected products.</p>;
  }
  
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
        <Modal.Title>Order Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Company Name: {companyName}</p>
        <p>User Name: {userName}</p>
        <p>Phone Number: {phoneNumber}</p> 
        <h1>Order Summary</h1>
        {selectedProducts.length > 0 ? (
          <div>
            <h3>Selected Products:</h3>
            <ul>
              {selectedProducts.map( (product) => (
                <li key={product.id}>
                  {product.name} - Quantity: {product.quantity}
                </li>
              ) )}
            </ul>         
          </div>
        ) : (
        <p>No products selected.</p>
        )}
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Price: {getTotalPrice()}</p>
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleSave}>Save</Button>
        <p>Notes: {notes}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};  
export default OrderSummary;