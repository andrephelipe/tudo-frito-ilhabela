/* eslint-disable no-constant-condition */
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillCartCheckFill } from 'react-icons/bs';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/Cards.css';

// eslint-disable-next-line react/prop-types
function CardsHome({ products }) {
  const { carrinho: { items }, setCarrinho, carrinho } = useContext(CarrinhoContext);
  const NUM = -1;

  const handleButtonAddCart = (productId, tamanho) => {
    // eslint-disable-next-line react/prop-types
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    const preco = tamanho === '800g' ? product.priceGrande : product.priceMedio;

    setCarrinho({
      ...carrinho,
      items: [...carrinho.items, {
        name: product.name,
        price: preco,
        tamanho,
      }],
    });

    toast.success('Item adicionado ao carrinho!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Tempo em milissegundos para fechar automaticamente (aqui é 2 segundos)
    });
  };

  return (
    <div>
      <ToastContainer />

      <div className="back-button">
        <Link className="cart-button" to="/carrinho">
          <BsFillCartCheckFill size={ 35 } color="black" />
          {items.length > NUM && (
            <span className="cart-count">{items.length}</span>
          )}
        </Link>
      </div>

      <div className="cards-container">
        {
          // eslint-disable-next-line react/prop-types
          products.map((product) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [tamanhoSelecionado, setTamanhoSelecionado] = useState('400g');

            return (
              <div key={ product.id } className="card">
                <img src={ product.image } alt={ product.name } />
                <h2>{ product.name }</h2>
                {
                  Array.isArray(product.tamanho) && (
                    <select
                      value={ tamanhoSelecionado }
                      onChange={ (event) => setTamanhoSelecionado(event.target.value) }
                    >
                      <option value="">Selecione um tamanho</option>
                      {product.tamanho.map((tamanho, index) => (
                        <option key={ index } value={ tamanho }>
                          {tamanho}
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
                  { (tamanhoSelecionado === '800g'
                    ? product.priceGrande : product.priceMedio).toFixed(2) }
                </span>
                <button
                  type="button"
                  onClick={ () => handleButtonAddCart(product.id, tamanhoSelecionado) }
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default CardsHome;
