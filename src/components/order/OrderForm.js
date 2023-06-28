import React, { useState } from 'react';
import { Form, Button, Modal, ButtonGroup } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Document, PDFDownloadLink, PDFViewer, Page, View, Text } from '@react-pdf/renderer';
import htmlToPdfMake from 'html-to-pdfmake';

const OrderForm = ({ selectedProducts, setSelectedProducts, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [notes, setNotes] = useState('');
  const [orderContentState, setOrderContentState] = useState('');

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
    const uniqueProducts = new Set(selectedProducts.map((product) => product.name));
    return uniqueProducts.size;
  };
  const getTotalPrice = () => {
    const totalPrice = selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity, 0 );
    return totalPrice.toFixed(2);
  };

  const handleGenerateOrder = () => {
    if (validateForm()) {
      const orderContentHTML = `
        <h3>Application for components for sectional doors</h3>
  
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>User Name:</strong> ${userName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
  
        <h4>Selected products:</h4>
        <ul>
          ${selectedProducts
            .map(
              (product) =>
                `<li>${product.name} (Quantity: ${product.quantity}, Price: ${product.price} USD)</li>`
            )
            .join('')}
        </ul>
  
        <p><strong>Notes:</strong></p>
        <p>${notes}</p>
  
        <p><strong>Total quantity:</strong> ${getTotalQuantity()}</p>
        <p><strong>Total price:</strong> ${getTotalPrice()} USD</p>
  
        <p>Created using "OSAtechno" web service.</p>
      `;
  
      const orderContentPDF = htmlToPdfMake(orderContentHTML);
  
      setOrderContentState(orderContentPDF);
    }
  };

  const handleCloseModal = () => {
    setOrderContentState('');
    onClose();
  };

  return (
    <Modal show onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              isInvalid={!!companyNameError}
            />
            <Form.Control.Feedback type="invalid">{companyNameError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              isInvalid={!!userNameError}
            />
            <Form.Control.Feedback type="invalid">{userNameError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              isInvalid={!!phoneNumberError}
            />
            <Form.Control.Feedback type="invalid">{phoneNumberError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
        </Form>
        <h4>Selected Products</h4>
        {selectedProducts.length === 0 ? (
          <p>No products selected.</p>
        ) : (
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} (Quantity: {product.quantity}, Price: {product.price} USD)
                <Button
                  variant="danger"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <RiDeleteBinLine />
                </Button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total Quantity: {getTotalQuantity()}</h4>
        <h4>Total Price: {getTotalPrice()} USD</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleGenerateOrder}>
          Generate Order
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>   
      </Modal.Footer>

      {orderContentState && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Generated Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PDFViewer width="100%" height="500px">
              <Document>
                <Page size="A4" style={{ padding: '20px' }}>
                  <View>
                    <Text>{orderContentState}</Text>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup className="mr-2">
              <PDFDownloadLink document={<Document>{orderContentState}</Document>} fileName="gates-part-order.pdf">
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download PDF'
                }
              </PDFDownloadLink>
            </ButtonGroup>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </Modal>
  );
};

export default OrderForm;