import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/Cards.css';

// eslint-disable-next-line react/prop-types
function Cards({ products }) {
  const { setCarrinho, carrinho } = useContext(CarrinhoContext);
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

    toast.success('Item adicionado ao carrinho!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Tempo em milissegundos para fechar automaticamente (aqui é 2 segundos)
    });
  };

  return (
    <div>
      <ToastContainer />

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
    </div>
  );
}

export default Cards;
