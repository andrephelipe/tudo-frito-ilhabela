import familia from '../../Assets/familia.jpg';
import duo from '../../Assets/duo.jpeg';
import solo from '../../Assets/solo.jpg';

/* eslint-disable max-len */

const combos = [
  {
    id: 1,
    title: 'Combo 4 pessoas',
    name: 'Combo Eu e a galera + refrigerante 2l',
    description: '300g tirinhas de peito de frango - 200g de batata noisette - 200g de cebola onion - 200g de coxinha',
    subDescription: 'Acompanha 3 molhos: Maionese temperada 30ml, molho Barbecue 30ml e molho Rose 30ml + refrigerante 2l',
    image: familia,
    oldPrice: 95.99,
    newPrice: 89.99,
  },
  {
    id: 2,
    title: 'Combo duo',
    name: 'Combo Nós dois',
    description: '150g tirinhas de peito de frango - 100g de batata frita - 100g de cebola onion - 100g de coxinha',
    subDescription: 'Acompanha 2 molhos: Maionese temperada 30ml, molho Barbecue 30ml',
    image: duo,
    oldPrice: 75.99,
    newPrice: 69.99,
  },
  {
    id: 3,
    title: 'Combo individual',
    name: 'Combo Tô sozinho',
    description: '100g tirinhas de peito de frango - 50g de batata frita - 50g de cebola onion - 50g de coxinha',
    subDescription: 'Acompanha 2 molhos: Maionese temperada 30ml, molho Barbecue 30ml',
    image: solo,
    oldPrice: 65.99,
    newPrice: 59.99,
  },
];

export default combos;
