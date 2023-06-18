import GatesDatabase from '../database/GatesDatabase';
import RolletsDatabase from '../database/RolletsDatabase';

const DataService = {
  getResidentialProducts: () => {
    return [...GatesDatabase.residential, ...GatesDatabase.common];
  },

  getIndustrialProducts: () => {
    return [...GatesDatabase.industrial, ...GatesDatabase.common];
  },

  getGatesById: (productId) => {
    const allProducts = [
      ...GatesDatabase.residential,
      ...GatesDatabase.industrial,
      ...GatesDatabase.common,
    ];
    return allProducts.find((product) => product.id === productId);
  },
  getRolletsById: (productId) => {
    const allProducts = [
      ...RolletsDatabase.residential,
      ...RolletsDatabase.industrial,
      ...RolletsDatabase.common,
    ];
    return allProducts.find((product) => product.id === productId);
  },

};

export default DataService;
