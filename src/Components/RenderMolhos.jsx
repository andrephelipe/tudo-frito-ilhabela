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
import molhos from '../Data/molhos';

// css
import './Style/Render.css';

function RenderMolhos() {
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
      <h1 className="porcoes-home">MOLHOS</h1>
      <Cards products={ molhos } />
    </section>
  );
}

export default RenderMolhos;
