import batataFrita from '../../Assets/batata-frita.jpg';
import batataEmpanada from '../../Assets/batata-empanada.jpg';

const MOLHO1 = 'Acompanha molho rose e maionese temperada';
const MOLHO2 = 'Acompanha molho de barbecue e maionese temperada';
const MOLHO3 = 'Acompanha molho de pimenta da casa';
const MOLHO4 = 'Acompanha molho de ketchup';

const porcoes = [
  {
    id: 1,
    name: 'Porção de batata empanada com tempero especial da casa',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    image: batataEmpanada,
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 34.99,
    priceGrande: 64.99,
  },
  {
    id: 2,
    name: 'Porção de tulipa crocante com tempero especial da casa',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 39.99,
    priceGrande: 74.99,
  },
  {
    id: 3,
    name: 'Porção de coxinha da asa crocante com tempero especial da casa',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 34.99,
    priceGrande: 64.99,
  },
  {
    id: 4,
    name: 'Porção de Batata frita noisettes',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 44.99,
    priceGrande: 84.99,
  },
  {
    id: 5,
    name: 'Porção de mandioca frita',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 37.99,
    priceGrande: 74.99,
  },
  {
    id: 6,
    name: 'Porção de tiras de frango',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO2,
    tamanho: ['400g', '800g'],
    priceMedio: 39.99,
    priceGrande: 74.99,
  },
  {
    id: 7,
    name: 'Porção frango crocante',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: 'ao molho agridoce',
    tamanho: ['400g', '800g'],
    priceMedio: 44.99,
    priceGrande: 94.99,
  },
  {
    id: 8,
    name: 'Porção de dadinho de tapioca',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO3,
    tamanho: ['400g', '800g'],
    priceMedio: 44.99,
    priceGrande: 85.99,
  },
  {
    id: 9,
    name: 'Porção de batata frita palito',
    image: batataFrita,
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 39.99,
    priceGrande: 74.99,
  },
  {
    id: 10,
    name: 'Porção de polenta',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO1,
    tamanho: ['400g', '800g'],
    priceMedio: 29.99,
    priceGrande: 59.99,
  },
  {
    id: 11,
    name: 'Porção de cebola onion',
    image: 'https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg',
    description: MOLHO4,
    tamanho: ['400g', '400g'],
    priceMedio: 29.99,
    priceGrande: 29.99,
  },
];

export default porcoes;
