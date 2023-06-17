import React from 'react';

const GatesDatabase = {
  products: [
    {
      id: 'gd101',
      name: 'Product 101',
      description: 'Description of Product 101',
      price: 10.99,
      imageA: 'path/to/imageA',
      imageB: 'path/to/imageB'
    },
    {
      id: 'gd102',
      name: 'Product 102',
      description: 'Description of Product 102',
      price: 11.99,
      imageA: 'path/to/imageA',
      imageB: 'path/to/imageB'
    },
	{
      id: 'gd103',
      name: 'Product 103',
      description: 'Description of Product 103',
      price: 14.99,
      imageA: 'path/to/imageA',
      imageB: 'path/to/imageB'
    },
	{
      id: 'gd104',
      name: 'Product 104',
      description: 'Description of Product 104',
      price: 18.99,
      imageA: 'path/to/imageA',
      imageB: 'path/to/imageB'
    },
    {
      id: 'gd105',
      name: 'Product 105',
      description: 'Description of Product 105',
      price: 10.99,
      imageA: 'path/to/imageA',
      imageB: 'path/to/imageB'
    },
    // Add more products here...
  ],
  
  getProductById: function (productId) {
    return this.products.find(product => product.id === productId);
  }
};

export default GatesDatabase;