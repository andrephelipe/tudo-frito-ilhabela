import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/combos.css';

// eslint-disable-next-line react/prop-types
function Promocao({ products }) {
  const history = useHistory();
  const { carrinho: { items }, setCarrinho, carrinho } = useContext(CarrinhoContext);
  const NUM = -1;

  const handleButtonAddCart = (param) => {
    setCarrinho({
      ...carrinho,
      items: [...carrinho.items, {
        name: param.name,
        price: param.newPrice,
      }],
    });
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
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

      <section className="cards-container-combos">
        {
          // eslint-disable-next-line react/prop-types
          products.map((product) => (
            <div key={ product.id } className="card-promo-pr">
              <h1>{ product.title }</h1>
              <img src={ product.image } alt={ product.name } />
              <h2>{ product.name }</h2>
              <small>
                { product.description }
              </small>
              <span className="old-price-pr">
                De:
                {' '}
                R$
                {' '}
                { product.oldPrice}
              </span>
              <span>
                Para:
                {' '}
                R$
                {' '}
                { product.newPrice}
              </span>
              <br />
              <button
                type="button"
                onClick={ () => handleButtonAddCart(product) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Promocao;
