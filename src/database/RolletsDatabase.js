




const RolletsDatabase = {
  industrial: [
    // Industrial-specific products
    {
      id: 'rd101',
      name: 'Top seal',
      // Other properties...
    },
    // Other industrial products...
  ],
  residential: [
    // Residential-specific products
    {
      id: 'rd102',
      name: 'Aluminum bottom profile',
      // Other properties...
    },
    // Other residential products...
  ],
  // Common products suitable for both industrial and residential groups
  common: [
    {
      id: 'rd103',
      name: 'Common product for both groups',
      // Other properties...
    },
    // Other common products...
  ],

  getProductById: function (productId) {
    // Search for the product in all arrays
    const product = this.industrial.find(product => product.id === productId) ||
                    this.residential.find(product => product.id === productId) ||
                    this.common.find(product => product.id === productId);

    return product;
  }
  
};

export default RolletsDatabase;