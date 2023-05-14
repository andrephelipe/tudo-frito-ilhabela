import { useState, useContext } from 'react';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/Cards.css';

// eslint-disable-next-line react/prop-types
function Cards({ products }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const [saborSelecionado, setSaborSelecionado] = useState('');

  const handleButtonAddCart = (param) => {
    let sabor = '';
    if (Array.isArray(param.sabores)) {
      sabor = saborSelecionado;
    }
    setSaborSelecionado('');

    const alreadyInCart = carrinho.items.some((item) => item.name === param.name
      && item.sabor === sabor);
    if (!alreadyInCart) {
      setCarrinho({
        ...carrinho,
        items: [...carrinho.items, {
          name: param.name,
          price: param.price,
          sabor,
        }],
      });
    }
  };

  return (
    <div className="cards-container">
      {
        // eslint-disable-next-line react/prop-types
        products.map((product) => (
          <div key={ product.id } className="card">
            <img src={ product.image } alt={ product.name } />
            <h2>{ product.name }</h2>
            {
              Array.isArray(product.sabores) && (
                <select
                  onChange={ (event) => setSaborSelecionado(event.target.value) }
                >
                  <option value="">Selecione um sabor</option>
                  {product.sabores.map((sabor, index) => (
                    <option key={ index } value={ sabor }>
                      {sabor}
                    </option>
                  ))}
                </select>
              )
            }
            <small>
              { product.description }
            </small>
            <span>
              {' '}
              R$
              {' '}
              { (product.price).toFixed(2) }
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
