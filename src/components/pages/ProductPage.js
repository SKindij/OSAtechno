import React from 'react';
import { useParams } from 'react-router-dom';
import GatesDatabase from '../../database/GatesDatabase';
import RolletsDatabase from '../../database/RolletsDatabase';

const ProductDetails = () => {
  const { productId, databaseType } = useParams();
  let product;

  if (databaseType === 'gates') {
    product = GatesDatabase.getProductById(productId);
  } else if (databaseType === 'rollets') {
    product = RolletsDatabase.getProductById(productId);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.imageA} alt="Product Image A" />
      <img src={product.imageB} alt="Product Image B" />
    </div>
  );
};

export default ProductDetails;

