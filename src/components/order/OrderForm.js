import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Font, pdf, Document, StyleSheet, Page, View, Text } from '@react-pdf/renderer';
// Paths to font files
const notoSerifFontRegularPath = '../../resources/NotoSerif-Regular.ttf';
const notoSerifFontSemiBoldItalicPath = '../../resources/NotoSerif-SemiBoldItalic.ttf';
const notoSerifFontBoldPath = '../../resources/NotoSerif-Bold.ttf';
// Loading fonts
const [notoSerifFontRegular, notoSerifFontSemiBoldItalic, notoSerifFontBold] = await Promise.all([
  Font.load(await fetch(notoSerifFontRegularPath).then((res) => res.arrayBuffer())),
  Font.load(await fetch(notoSerifFontSemiBoldItalicPath).then((res) => res.arrayBuffer())),
  Font.load(await fetch(notoSerifFontBoldPath).then((res) => res.arrayBuffer())),
]);
// Adding fonts to the document
pdfDoc.registerFont('NotoSerifRegular', notoSerifFontRegular);
pdfDoc.registerFont('NotoSerifSemiBoldItalic', notoSerifFontSemiBoldItalic);
pdfDoc.registerFont('NotoSerifBold', notoSerifFontBold);




const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    flexGrow: 1,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  notes: {
    fontFamily: 'Arial',
    fontSize: 14,
    marginVertical: 10,
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    fontSize: 12,
    marginTop: 20,
    color: 'gray',
  },
});

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

  const handleGenerateOrder = () => {
    if (validateForm()) {
      const orderContent = {
        companyName, userName, phoneNumber,
        products: selectedProducts, notes,
        totalQuantity: getTotalQuantity(),
        totalPrice: getTotalPrice()
      };

      // Generate PDF content
      const MyDocument = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              

              <Text style={styles.subtitle}>{orderContent.companyName}</Text>
              <Text style={styles.subtitle}>{orderContent.userName}</Text>
              <Text style={styles.subtitle}>{orderContent.phoneNumber}{'\n'}</Text>

              <Text style={styles.title}>Application for components for sectional doors</Text>
              {/* Display details about the order */}
              {orderContent.products.map( (product) => (
                <View key={product.id}>
                  <Text style={styles.productName}>
                    {product.article} {product.name}: {product.quantity} {product.unit}
                  </Text>
                </View>
               )) }
      
              <Text style={styles.notes}>{orderContent.notes}{'\n'}</Text>

              <Text style={styles.total}>Type of goods: {orderContent.totalQuantity}</Text>
              <Text style={styles.total}>Total Price: {orderContent.totalPrice}{'\n'}</Text>
      
              <Text style={styles.footer}>Created using "OSAtechno" web service.</Text>
            </View>
          </Page>
        </Document>
      );

 // Create a Blob with PDF data
 const pdfBlob = async () => {
  const pdfBlobInstance = await pdf(<MyDocument />).toBlob();
  return pdfBlobInstance;
};

pdfBlob().then((blob) => {
  // Create a URL from the Blob
  const url = URL.createObjectURL(blob);

  // Create a link for downloading the PDF
  const link = document.createElement('a');
  link.href = url;
  link.download = 'order.pdf';
  link.click();

  // Cleanup
  URL.revokeObjectURL(url);
  onClose();
});
}
};

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              isInvalid={!!companyNameError}
            />
            <Form.Control.Feedback type="invalid">{companyNameError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              isInvalid={!!userNameError}
            />
            <Form.Control.Feedback type="invalid">{userNameError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              isInvalid={!!phoneNumberError}
            />
            <Form.Control.Feedback type="invalid">{phoneNumberError}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3}
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
                {product.name} {product.article} Quantity: {product.quantity} {product.unit}
                <Button variant="danger" size="sm" className="ml-2"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <RiDeleteBinLine />
                </Button>
              </li>
            ))}
          </ul>
        )}

        {/* Display total quantity and total price */}
        <div>
          <strong>Total Quantity:</strong> {getTotalQuantity()}
        </div>
        <div>
          <strong>Total Price:</strong> ${getTotalPrice()}
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
