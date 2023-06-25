/*
-displays the overall summary of the order;
-contains "Print" and "Save" buttons;
*/
import React from 'react';
import { Button } from 'react-bootstrap';

const OrderSummary = ({ selectedProducts, onPrint, onSave }) => {
  const getTotalQuantity = () => {
    return selectedProducts.reduce((total, product) => total + product.quantity, 0);
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Order Summary</h2>
      {selectedProducts.length > 0 ? (
        <div>
          <h3>Selected Products:</h3>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
          <p>Total Quantity: {getTotalQuantity()}</p>
          <p>Total Price: {getTotalPrice()}</p>
        </div>
      ) : (
        <p>No products selected.</p>
      )}
      <Button onClick={onPrint}>Print</Button>
      <Button onClick={onSave}>Save</Button>
    </div>
  );
};

export default OrderSummary;