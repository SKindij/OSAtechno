import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { pdf, Document, StyleSheet, Page, View, Text } from '@react-pdf/renderer';
import './Order.scss';

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  container: {
    flexDirection: 'column',
  },
  section: {
    margin: 10,
  },
  subtitle: {
    fontSize: 14, fontStyle: 'italic', fontWeight: 'semiBold',
    marginBottom: 5,
  },  
  title: {
    fontWeight: 'bold', fontSize: 18,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16, fontWeight: 'bold',
    marginBottom: 3,
  },
  total: {
    fontSize: 16, fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    fontSize: 10,     color: 'gray',
    marginTop: 30, textAlign: 'center'
  },
});

const OrderForm = ({ selectedProducts, setSelectedProducts, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

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

const handleGenerateOrder = () => {
   if (validateForm()) {
      const orderContent = {
         companyName, userName, phoneNumber,
         products: selectedProducts,
         totalQuantity: getTotalQuantity(),
         totalPrice: getTotalPrice()
      };
    // Create a Blob with PDF data
    const pdfBlob = async () => {
      const pdfBlobInstance = await pdf(
        <Document>
          <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.subtitle}>{orderContent.companyName}</Text>
              <Text style={styles.subtitle}>{orderContent.userName}</Text>
              <Text style={styles.subtitle}>{orderContent.phoneNumber}{'\n'}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Application for components for sectional doors</Text>
              {/* Display details about the order */}
              {orderContent.products.map( (product) => (
                  <View key={product.id}>
                     <Text style={styles.productName}>
                        {product.article} {product.name}: {product.quantity} {product.unit}
                     </Text>
                  </View>
               )) }
            </View> 
            <View style={styles.section}>
              <Text style={styles.total}>Type of goods: {orderContent.totalQuantity}</Text>
              <Text style={styles.total}>Total Price: {orderContent.totalPrice}{'\n'}</Text>      
              <Text style={styles.footer}>Created using "OSAtechno" web service.</Text>
            </View>
          </View>  
          </Page>
        </Document>
        ).toBlob();
      return pdfBlobInstance;
    };

    pdfBlob().then( (blob) => {
      // create a URL from the Blob
      const url = URL.createObjectURL(blob);
      // create a link for downloading the PDF
      const link = document.createElement('a');
        link.href = url;
        link.download = `order-${orderContent.companyName}.pdf`;
        link.click();
      // Cleanup
      URL.revokeObjectURL(url);
      onClose();
    } );
  }
};

  return (
    <Modal show={true} onHide={onClose} className="order-modal">
      <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formCompanyName">
            <Form.Label className="form-label">Company Name</Form.Label>
            <Form.Control type="text" className="form-control"
              value={companyName} placeholder="Enter company name"
              onChange={(e) => setCompanyName(e.target.value)}
              isInvalid={!!companyNameError}
            />
            <Form.Control.Feedback type="invalid">{companyNameError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formUserName">
            <Form.Label className="form-label">User Name</Form.Label>
            <Form.Control type="text" className="form-control"
              value={userName} placeholder="Enter user name"
              onChange={(e) => setUserName(e.target.value)}
              isInvalid={!!userNameError}
            />
            <Form.Control.Feedback type="invalid">{userNameError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label className="form-label">Phone Number</Form.Label>
            <Form.Control type="text" className="form-control"
              value={phoneNumber} placeholder="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              isInvalid={!!phoneNumberError}
            />
            <Form.Control.Feedback type="invalid">{phoneNumberError}</Form.Control.Feedback>
            <Form.Text className="text-muted">We'll never share your data with anyone else.</Form.Text>
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
      
        <Button variant="primary" onClick={handleGenerateOrder}>
          Generate Order
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default OrderForm;
