import { Link } from 'react-router-dom';

// Componets
import Header from '../Components/Header';
import CardHome from '../Components/CardHome';
import HorarioFuncionamento from '../Components/Funcionamento';

// Data
// import cardapio from '../Data/Cardapio';
import porcoes from '../Data/porcoes';

// CSS
import './Home.css';

function Home() {
  return (
    <section>
      <Header />
      <HorarioFuncionamento />

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

        <div className="button-container">
          <Link to="/molhos">
            <button className="button-options">
              Molhos
            </button>
          </Link>
        </div>
      </div>

      <div className="name-class-product">
        <h1 className="porcoes-home">PORÇÕES</h1>
      </div>

      <CardHome products={ porcoes } />
    </section>
  );
}

export default Home;
