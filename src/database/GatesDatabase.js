
import A825101 from '../resources/gatesImages/A825101.png';
import B825101 from '../resources/gatesImages/B825101.png';
import A820100 from '../resources/gatesImages/A820100.png';
import B820100 from '../resources/gatesImages/B820100.png';
import A217070 from '../resources/gatesImages/A217070.png';
import B217070 from '../resources/gatesImages/B217070.png';
import A217071 from '../resources/gatesImages/A217071.png';
import B217071 from '../resources/gatesImages/B217071.png';
import A217074 from '../resources/gatesImages/A217074.png';
import B217074 from '../resources/gatesImages/B217074.png';
import A217075 from '../resources/gatesImages/A217075.png';
import B217075 from '../resources/gatesImages/B217075.png';
import A230104 from '../resources/gatesImages/A230104.png';
import B230104 from '../resources/gatesImages/B230104.png';
import A25238_1 from '../resources/gatesImages/A25238_1.png';
import B25238_1 from '../resources/gatesImages/B25238_1.png';



const GatesDatabase = {
  products: [
    {
      id: 'gd101',
      name: 'Top seal',
      article: 825101,
      description: 'Material: rubber. Suitable for aluminum profile 820100.',
      price: 2.75,
      categories: 'On Panel',
      imageA: A825101,
      imageB: B825101
    },
    {
      id: 'gd102',
      name: 'Aluminum bottom profile',
      article: 820100,
      description: 'For 40 mm thick panels. Suitable for rubber seal 825101.',
      price: 31.69,
      categories: 'On Panel',
      imageA: A820100,
      imageB: B820100
    },
	{
      id: 'gd103',
      name: 'Endcap left 40-500mm',
      article: 217070,
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 4.62,
      categories: 'On Panel',
      imageA: A217070,
      imageB: B217070
    },
	{
      id: 'gd104',
      name: 'Endcap right 40-500mm',
      article: 217071,
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 4.62,
      categories: 'On Panel',
      imageA: A217071,
      imageB: B217071
    },
    {
      id: 'gd105',
      name: 'Endcap left 40-610mm',
      article: 217074,
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 5.59,
      categories: 'On Panel',
      imageA: A217074,
      imageB: B217074
    },
    {
      id: 'gd106',
      name: 'Endcap right 40-610mm',
      article: 217075,
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 5.59,
      categories: 'On Panel',
      imageA: A217075,
      imageB: B217075
    },
	{
      id: 'gd107',
      name: 'Top roller carrier',
      article: 230104,
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 1.39,
      categories: 'On Panel',
      imageA: A230104,
      imageB: B230104
    },
    {
      id: 'gd108',
      name: '',
      article: 25238.1,
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 0.55,
      categories: 'On Panel',
      imageA: A25238_1,
      imageB: B25238_1
    },
    // Add more products here...
  ],
  
  getProductById: function (productId) {
    return this.products.find(product => product.id === productId);
  }
};

export default GatesDatabase;