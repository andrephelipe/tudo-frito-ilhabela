// import React, { useContext } from 'react';
// import CarrinhoContext from '../Context/CarrinhoContext';

// Componets
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Promocao from '../Components/Promocao';

// Data
import cardapio from '../Data/Cardapio';
import quarta from '../Data/PromocaoQuarta';

// CSS
import './Home.css';

function Home() {
  return (
    <section>
      <Header />
      <Cards products={ cardapio } />
      <Promocao products={ quarta } />
    </section>
  );
}

export default Home;
