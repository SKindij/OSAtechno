/*
-accessories selected by the user are displayed here;
-there is a form where the user can enter his data;
-here is the "Notes to order" field;
-contains "Delete" and "View" buttons at the bottom;
*/
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const OrderForm = ({ selectedProducts, onAddNote, onDeleteProduct }) => {
  const [notes, setNotes] = useState('');

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleAddNote = () => {
    onAddNote(notes);
    setNotes('');
  };

  const handleDeleteProduct = (productId) => {
    onDeleteProduct(productId);
  };

  return (
    <div>
      <h2>Order Form</h2>
      {selectedProducts.length > 0 ? (
        <div>
          <h3>Selected Products:</h3>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - Quantity: {product.quantity}
                <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No products selected.</p>
      )}
      <h3>Notes to Order:</h3>
      <Form.Control
        as="textarea"
        rows={3}
        value={notes}
        onChange={handleNotesChange}
      />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
};

export default OrderForm;