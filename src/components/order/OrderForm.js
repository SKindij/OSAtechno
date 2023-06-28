import React, { useState } from 'react';
import { Form, Button, Modal, ButtonGroup } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { PDFDownloadLink, PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

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

const orderContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.5;">
    <h2 style="color: #333; font-size: 24px; font-weight: bold;">Application for components for sectional doors</h2>
    <h3 style="color: #666; font-size: 18px; font-weight: bold; margin-top: 20px;">Company: ${companyName}</h3>
    <h3 style="color: #666; font-size: 18px; font-weight: bold;">User: ${userName}</h3>
    <h3 style="color: #666; font-size: 18px; font-weight: bold;">Phone: ${phoneNumber}</h3>    
    <h3 style="color: #333; font-size: 20px; font-weight: bold; margin-top: 30px;">Selected Products:</h3>
    <ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px;">
      ${selectedProducts
        .map( (product) => `
              <li>
                <span style="font-weight: bold;">${product.name} ${product.article}</span> 
                - ${product.quantity} ${product.unit}
              </li>`
        ).join('')}
    </ul>    
    <h3 style="color: #333; font-size: 20px; font-weight: bold; margin-top: 30px;">Notes to Order:</h3>
    <p>${notes}</p> 
    <p style="color: #333; font-size: 18px; font-weight: bold; margin-top: 30px;">
      Total Quantity: ${getTotalQuantity()}
    </p>
    <p style="color: #333; font-size: 18px; font-weight: bold;">
      Total Price: ${getTotalPrice().toFixed(2)} €
    </p>
    <p style="color: #666; font-size: 14px; margin-top: 30px;">
      Created using "OSAtechno" web service.
    </p>
  </div>
`;
  
const handleView = () => {   
  const MyDocument = () => (
     <Document>
        <Page>
          <Text>{orderContent}</Text>
        </Page>
     </Document>
  );    
  const Viewer = () => (
    <PDFViewer width="100%" height={600}>
        <MyDocument />
    </PDFViewer>
  );  
  const win = window.open();
    win.document.write(`
      <html>
        <head>
          <title>Order Preview</title>
        </head>
        <body style="margin: 0;">
          <div id="root"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
          <script type="text/babel">
            const App = () => <Viewer />;
            ReactDOM.render(<App />, document.getElementById("root"));
          </script>
        </body>
      </html>
  `);  
  console.log('View the Order');
};

const handleSave = () => {
  const MyDocument = () => (
    <Document>
      <Page>
        <Text>{orderContent}</Text>
      </Page>
    </Document>
  );
  const fileName = 'order.pdf';
    return (
      <PDFDownloadLink document={<MyDocument />} fileName={fileName}>
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
  );
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
          View
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
