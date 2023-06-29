import familia from '../../Assets/familia.jpg';
import duo from '../../Assets/duo.jpeg';
import solo from '../../Assets/solo.jpeg';
import duvida from '../../Assets/duvida.jpeg';
import lancheCrocante from '../../Assets/lancheCrocante.jpeg';
import lancheDuo from '../../Assets/frangoDuo.jpeg';

/* eslint-disable max-len */

const combos = [
  {
    id: 1,
    // title: 'Combo individual',
    name: 'Combo Tô sozinho',
    description: '230g tirinhas de peito de frango - 50g de batata frita - 50g de cebola onion - 60g de mini coxinha',
    subDescription: 'Acompanha 2 molhos: Maionese temperada, molho Barbecue',
    image: solo,
    oldPrice: 65.99,
    newPrice: 59.99,
  },
  {
    id: 2,
    // title: 'Combo duo',
    name: 'Combo Nós dois',
    description: '450g tirinhas de peito de frango - 100g de batata frita - 100g de cebola onion - 150g de mini coxinha',
    subDescription: 'Acompanha 2 molhos: Maionese temperada, molho Barbecue',
    image: duo,
    oldPrice: 75.99,
    newPrice: 69.99,
  },
  {
    id: 3,
    // title: 'Combo 4 pessoas',
    name: 'Combo Eu e a galera + refrigerante 2l',
    description: '650g tirinhas de peito de frango - 150g de batata frita - 150g de cebola onion - 200g de mini coxinha',
    subDescription: 'Acompanha 3 molhos: Maionese temperada, molho Barbecue e molho Rose + refrigerante 2l',
    image: familia,
    oldPrice: 95.99,
    newPrice: 89.99,
  },
  {
    id: 4,
    // title: 'Combo 4 pessoas',
    name: 'Combo Tô na dúvida + refrigerante 2l',
    description: '400g coxinha da asa - 4000g de polenta frita - 400g de mini bolinho de carne',
    subDescription: 'Acompanha 3 molhos: Maionese temperada, molho Barbecue e molho mostarda + refrigerante 2l',
    image: duvida,
    oldPrice: 99.99,
    newPrice: 94.99,
  },
  {
    id: 5,
    // title: 'Combo 4 pessoas',
    name: 'X Frango Crocante Eu a galera + refrigerante 2l',
    description: '4 unidades de sanduíche - pão de hambúrguer, filé de frango empanado',
    subDescription: 'Molho especial da casa, cheddar, alface e tomate + 400g batata frita',
    image: lancheCrocante,
    oldPrice: 99.99,
    newPrice: 89.99,
  },
  {
    id: 6,
    // title: 'Combo 4 pessoas',
    name: 'X Frango Crocante Nós dois',
    description: '2 unidades de sanduíche - pão de hambúrguer, filé de frango empanado',
    subDescription: 'Molho especial da casa, cheddar, alface e tomate + 200g batata frita',
    image: lancheDuo,
    oldPrice: 89.99,
    newPrice: 69.99,
  },
];

export default combos;
