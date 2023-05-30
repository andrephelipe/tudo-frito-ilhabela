import { useContext } from 'react';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/promo.css';

function Promocao({ products }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const handleButtonAddCart = (param) => {
    setCarrinho({
      ...carrinho,
      items: [...carrinho.items, {
        name: param.name,
        price: param.newPrice,
      }],
    });
  };

  return (
    <div className="cards-container">
      {
        products.map((product) => (
          <div key={ product.id } className="card-promo">
            <h1>{ product.title }</h1>
            <img src={ product.image } alt={ product.name } />
            <h2>{ product.name }</h2>
            <small>
              { product.description }
            </small>
            <span className="old-price">
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
    </div>
  );
}

export default Promocao;
