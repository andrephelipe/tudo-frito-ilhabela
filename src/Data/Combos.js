import familia from '../../Assets/familia.jpg';
import duo from '../../Assets/duo.jpeg';
import solo from '../../Assets/solo.jpg';

/* eslint-disable max-len */

const combos = [
  {
    id: 1,
    // title: 'Combo 4 pessoas',
    name: 'Combo Eu e a galera + refrigerante 2l',
    description: '650g tirinhas de peito de frango - 150g de batata frita - 150g de cebola onion - 200g de mini coxinha',
    subDescription: 'Acompanha 3 molhos: Maionese temperada 30ml, molho Barbecue 30ml e molho Rose 30ml + refrigerante 2l',
    image: familia,
    oldPrice: 95.99,
    newPrice: 89.99,
  },
  {
    id: 2,
    // title: 'Combo duo',
    name: 'Combo Nós dois',
    description: '450g tirinhas de peito de frango - 100g de batata frita - 100g de cebola onion - 150g de mini coxinha',
    subDescription: 'Acompanha 2 molhos: Maionese temperada 30ml, molho Barbecue 30ml',
    image: duo,
    oldPrice: 75.99,
    newPrice: 69.99,
  },
  {
    id: 3,
    // title: 'Combo individual',
    name: 'Combo Tô sozinho',
    description: '230g tirinhas de peito de frango - 50g de batata frita - 50g de cebola onion - 60g de mini coxinha',
    subDescription: 'Acompanha 2 molhos: Maionese temperada 30ml, molho Barbecue 30ml',
    image: solo,
    oldPrice: 65.99,
    newPrice: 59.99,
  },
];

export default combos;
