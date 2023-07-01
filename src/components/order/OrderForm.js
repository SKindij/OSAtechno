import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Завантажуємо шрифти для pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const OrderForm = ({ selectedProducts, setSelectedProducts, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [notes, setNotes] = useState('');

  const handleDeleteProduct = (productId) => {
    const updatedSelectedProducts = selectedProducts.filter(
      (product) => product.id !== productId
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const validateForm = () => {
    let isValid = true;
    if (companyName.trim() === '') {
      setCompanyNameError('Company name is required.');
      isValid = false;
    } else {
      setCompanyNameError('');
    }
    if (userName.trim() === '') {
      setUserNameError('User name is required.');
      isValid = false;
    } else {
      setUserNameError('');
    }
    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Phone number is required.');
      isValid = false;
    } else {
      setPhoneNumberError('');
    }
    return isValid;
  };

  const getTotalQuantity = () => {
    const uniqueProducts = new Set(selectedProducts.map((product) => product.article));
    return uniqueProducts.size;
  };

  const getTotalPrice = () => {
    const totalPrice = selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity, 0
    );
    return totalPrice.toFixed(2);
  };

  const generateOrderPDF = () => {
    if (validateForm()) {
      const orderContent = {
        companyName,
        userName,
        phoneNumber,
        notes,
        products: selectedProducts,
        totalQuantity: getTotalQuantity(),
        totalPrice: getTotalPrice()
      };

      const docDefinition = {
        content: [
          { text: orderContent.companyName, fontSize: 12, bold: true, margin: [0, 0, 0, 5] },
          { text: orderContent.userName, fontSize: 10, margin: [0, 0, 0, 5] },
          { text: orderContent.phoneNumber, fontSize: 10, margin: [0, 0, 0, 10] },
          { text: 'Application for sectional doors components:', fontSize: 14, bold: true, margin: [0, 0, 0, 10] },
          ...orderContent.products.map(product => ({
            text: `* ${product.article} ${product.name}: ${product.quantity} ${product.unit}`,
            fontSize: 10,
            margin: [0, 0, 0, 5]
          })),
          { text: 'Additional notes:', fontSize: 12, bold: true, margin: [0, 10, 0, 5] },
          { text: orderContent.notes, fontSize: 10, margin: [0, 0, 0, 10] },
          { text: `Type of goods: ${orderContent.totalQuantity}.`, fontSize: 10, bold: true, margin: [0, 0, 0, 10] },
          { text: `Total price: ${orderContent.totalPrice} EURO.`, fontSize: 10, bold: true, margin: [0, 0, 0, 10] },
          { text: `Created using "OSAtechno" web service.`, fontSize: 8, margin: [30, 0, 0, 10] },
        ]
      };

      pdfMake.createPdf(docDefinition).open();
    }
  };

  return (
    <Modal show={true} onHide={onClose} className="order-modal"
    backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Order Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Form.Group controlId="formCompanyName" className="mb-3">
          <Form.Label className="form-label">Company Name</Form.Label>
          <Form.Control type="text" className="form-control"
            value={companyName} placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
            isInvalid={!!companyNameError}
          />
          <Form.Control.Feedback type="invalid">{companyNameError}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserName" className="mb-3">
          <Form.Label className="form-label">User Name</Form.Label>
          <Form.Control type="text" className="form-control"
            value={userName} placeholder="Enter user name"
            onChange={(e) => setUserName(e.target.value)}
            isInvalid={!!userNameError}
          />
          <Form.Control.Feedback type="invalid">{userNameError}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control type="text" className="form-control"
            value={phoneNumber} placeholder="Enter phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            isInvalid={!!phoneNumberError}
          />
          <Form.Control.Feedback type="invalid">{phoneNumberError}</Form.Control.Feedback>
          <Form.Text className="text-muted">We'll never share your data with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="notes">
           <Form.Label>Notes</Form.Label>
           <Form.Control as="textarea" rows={2}
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="selected-products">
      <h4>Selected Products</h4>
      {selectedProducts.length === 0 ? (
        <p>No products selected.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Article</th><th>Product Name</th>
              <th>Quantity</th><th>Unit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {selectedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.article}</td><td>{product.name}</td>
              <td>{product.quantity}</td><td>{product.unit}</td>
              <td>
                <Button variant="danger" size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                > <RiDeleteBinLine />
                </Button>
              </td>
           </tr>
          ))}
          </tbody>
        </table>
      )}
      </div>
      <div className="total-quantity">
        <strong>Type of goods:</strong> {getTotalQuantity()}
      </div>
      <div className="total-price">
        <strong>Total Price:</strong> {getTotalPrice()} EURO
      </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="primary" onClick={generateOrderPDF}>Generate PDF</Button>
        <Button variant="secondary" onClick={onClose}>Close</Button> 
      </Modal.Footer>
    </Modal>
  );
};

export default OrderForm;