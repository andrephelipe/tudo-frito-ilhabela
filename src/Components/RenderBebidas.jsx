/* eslint-disable react/jsx-max-depth */
// react
import { useHistory, Link } from 'react-router-dom';
import { useContext } from 'react';

// itens
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import CarrinhoContext from '../Context/CarrinhoContext';

// component
import Cards from './Cards';

// data
import bebidas from '../Data/bebidas';

// css
import './Style/Render.css';

function RenderBebidas() {
  const { carrinho: { items } } = useContext(CarrinhoContext);
  const NUM = -1;

  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section>
      <div>
        <div className="back-button">
          <button className="no-style-button" onClick={ handleGoBack }>
            <p>
              <HiArrowNarrowLeft size={ 30 } color="black" />
            </p>
          </button>

          <Link className="cart-button" to="/carrinho">
            <BsFillCartCheckFill size={ 35 } color="black" />
            {items.length > NUM && (
              <span className="cart-count">{items.length}</span>
            )}
          </Link>
        </div>
      </div>

      <div className="name-class-product">
        <div className="buttons-container">
          <div className="button-container">
            <Link to="/combos">
              <button className="button-options">
                Combos
              </button>
            </Link>
          </div>

          {/* <div className="button-container">
            <Link to="/molhos">
              <button className="button-options">
                Molhos
              </button>
            </Link>
          </div> */}

          <div className="button-container">
            <Link to="/">
              <button className="button-options">
                Porções
              </button>
            </Link>
          </div>
        </div>

        <h1 className="porcoes-home">BEBIDAS</h1>
      </div>
      <Cards products={ bebidas } />
    </section>
  );
}

export default RenderBebidas;
