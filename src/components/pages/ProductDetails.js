import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
// Import the DataService
import DataService from '../../services/DataService';
import './Pages.scss';

const ProductDetails = ({ onClose, productId }) => { 
  const [product, setProduct] = useState(null);
  useEffect( () => {
    const fetchProductDetails = async () => {
      const productDetails = await DataService.getGatesById(productId);
      setProduct(productDetails);
    };
    fetchProductDetails();
  }, [productId] );

  if (!product) {
    return null;
    // <div>Loading...</div>;
  }

  return (
    <Modal show={true} onHide={onClose} className='modal-detail'
      backdrop="static" keyboard={false} >
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>               
        <div className="product-img-container">
          <img className="product-image" src={product.imageB} 
            alt="Drawing B of detail" width="800" height="600" />
        </div>  
        <p>Additional Information:</p>
        <p>{product.description}</p>  
        <p>{product.features}</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};
export default ProductDetails;