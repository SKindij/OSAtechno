import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
// Import the DataService
import DataService from '../../services/DataService';

const ProductDetails = ({ onClose }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productDetails = await DataService.getGatesById(productId);
      setProduct(productDetails);
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <img src={product.imageB} alt="Product B" />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetails;