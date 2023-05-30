import { Link } from 'react-router-dom';

// Componets
import Header from '../Components/Header';
import Cards from '../Components/Cards';
// import Promocao from '../Components/Promocao';

// Data
import cardapio from '../Data/Cardapio';
// import quarta from '../Data/PromocaoQuarta';

// CSS
import './Home.css';

function Home() {
  return (
    <section>
      <Header />

      <div className="buttons-container">
        <div className="button-container">
          <Link to="/combos">
            <button className="button-options">
              Combos
            </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/bebidas">
            <button className="button-options">
              Bebidas
            </button>
          </Link>
        </div>
      </div>

      <Cards products={ cardapio } />
    </section>

  );
}

export default Home;
