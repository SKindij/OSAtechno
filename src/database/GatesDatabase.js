
import A825101 from '../resources/gatesImages/A825101.jpg';
import B825101 from '../resources/gatesImages/B825101.jpg';
import A820100 from '../resources/gatesImages/A820100.jpg';
import B820100 from '../resources/gatesImages/B820100.jpg';
import A217070 from '../resources/gatesImages/A217070.jpg';
import B217070 from '../resources/gatesImages/B217070.jpg';
import A217071 from '../resources/gatesImages/A217071.jpg';
import B217071 from '../resources/gatesImages/B217071.jpg';
import A217074 from '../resources/gatesImages/A217074.jpg';
import B217074 from '../resources/gatesImages/B217074.jpg';
import A217075 from '../resources/gatesImages/A217075.jpg';
import B217075 from '../resources/gatesImages/B217075.jpg';
import A230104 from '../resources/gatesImages/A230104.jpg';
import B230104 from '../resources/gatesImages/B230104.jpg';
import A25238_1 from '../resources/gatesImages/A25238_1.jpg';
import B25238_1 from '../resources/gatesImages/B25238_1.jpg';
import A14024 from '../resources/gatesImages/A14024.jpg';
import B14024 from '../resources/gatesImages/B14024.jpg';
import A14022 from '../resources/gatesImages/A14022.jpg';
import B14022 from '../resources/gatesImages/B14022.jpg';
import A230130 from '../resources/gatesImages/A230130.jpg';
import B230130 from '../resources/gatesImages/B230130.jpg';
import A25734_1 from '../resources/gatesImages/A25734_1.jpg';
import B25734_1 from '../resources/gatesImages/B25734_1.jpg';
import A25010 from '../resources/gatesImages/A25010.jpg';
import B25010 from '../resources/gatesImages/B25010.jpg';
import A from '../resources/gatesImages/A.jpg';
import B from '../resources/gatesImages/B.jpg';








const GatesDatabase = {
  industrial: [
    // Industrial-specific products
    {
      id: 'gdi101',
      name: 'Top seal',
      article: '825101',
      description: 'Material: rubber. Suitable for aluminum profile 820100.',
      price: 2.75,
      categories: 'On Panel',
      imageA: A825101,
      imageB: B825101
    },  
	  {
      id: 'gdi102',
      name: 'Top roller carrier',
      article: '230104',
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 1.39,
      categories: 'On Panel',
      imageA: A230104,
      imageB: B230104
    },
    {
      id: 'gdi103',
      name: 'Roller carrier 11 mm',
      article: '25238.1',
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 0.55,
      categories: 'On Panel',
      imageA: A25238_1,
      imageB: B25238_1
    },
    {
      id: 'gdi104',
      name: 'Track bolt M8x10.5',
      article: '14024',
      description: 'Especially suitable for tracks with reduced side room. ',
      price: 0.09,
      categories: 'On Panel',
      imageA: A14024,
      imageB: B14024
    },
    {
      id: 'gdi105',
      name: 'Flange nut M8',
      article: '14022',
      description: 'M8 nut with locking serration.',
      price: 0.07,
      categories: 'On Panel',
      imageA: A14022,
      imageB: B14022
    },
    // Add more products here...
  ],
  residential: [
    // Residential-specific products
    {
      id: 'gdr101',
      name: '',
      article: '230130',
      description: '',
      price: 6.07,
      categories: 'On Panel',
      imageA: A230130,
      imageB: B230130
    },
    {
      id: 'gdr102',
      name: '',
      article: '',
      description: '',
      price: ,
      categories: 'On Panel',
      imageA: A,
      imageB: B
    },
    {
      id: 'gdr103',
      name: '',
      article: '',
      description: '',
      price: ,
      categories: 'On Panel',
      imageA: A,
      imageB: B
    },
    
    // Add more products here...
  ],
  // Common products suitable for both industrial and residential groups
  common: [
    {
      id: 'gdc101',
      name: 'Aluminum bottom profile',
      article: '820100',
      description: 'For 40 mm thick panels. Suitable for rubber seal 825101.',
      price: 31.69,
      categories: 'On Panel',
      imageA: A820100,
      imageB: B820100
    },
	{
      id: 'gdc102',
      name: 'Endcap left 40-500mm',
      article: '217070',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 4.62,
      categories: 'On Panel',
      imageA: A217070,
      imageB: B217070
    },
	{
      id: 'gdc103',
      name: 'Endcap right 40-500mm',
      article: '217071',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 4.62,
      categories: 'On Panel',
      imageA: A217071,
      imageB: B217071
    },
    {
      id: 'gdc104',
      name: 'Endcap left 40-610mm',
      article: '217074',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 5.59,
      categories: 'On Panel',
      imageA: A217074,
      imageB: B217074
    },
    {
      id: 'gdc105',
      name: 'Endcap right 40-610mm',
      article: '217075',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 5.59,
      categories: 'On Panel',
      imageA: A217075,
      imageB: B217075
    },
    {
      id: 'gdc106',
      name: 'Side hinge',
      article: '25734.1',
      description: 'Side hinge for 40mm panels.',
      price: 2.46,
      categories: 'On Panel',
      imageA: A25734_1,
      imageB: B
    },
    {
      id: 'gdc107',
      name: 'Roller 120 mm',
      article: '25010',
      description: 'Stainless steel & plastic.',
      price: 0.95,
      categories: 'On Panel',
      imageA: A25010,
      imageB: B25010
    },
    {
      id: 'gdc108',
      name: '',
      article: 'Roller 190 mm',
      description: 'Stainless steel & plastic.',
      price: 2.00,
      categories: 'On Panel',
      imageA: A,
      imageB: B
    },
    {
      id: 'gdc109',
      name: '',
      article: '',
      description: '',
      price: ,
      categories: 'On Panel',
      imageA: A,
      imageB: B
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

export default GatesDatabase;