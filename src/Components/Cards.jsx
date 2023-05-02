/* eslint-disable react/prop-types */
import { useContext } from 'react';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/Cards.css';

function Cards({ products }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const handleButtonAddCart = (param) => {
    setCarrinho({
      ...carrinho,
      items: [...carrinho.items, {
        name: param.name,
        price: param.price,
      }],
    });
  };

  return (
    <div className="cards-container">
      {
        products.map((product) => (
          <div key={ product.id } className="card">
            <img src={ product.image } alt={ product.name } />
            <h2>{ product.name }</h2>
            <small>
              { product.description }
            </small>
            <span>
              {' '}
              R$
              {' '}
              { product.price}
            </span>
            <button
              type="button"
              onClick={ () => handleButtonAddCart(product) }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Cards;
