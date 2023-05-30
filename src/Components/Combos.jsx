import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/combos.css';

// eslint-disable-next-line react/prop-types
function Promocao({ products }) {
  const { setCarrinho, carrinho } = useContext(CarrinhoContext);

  const handleButtonAddCart = (param) => {
    const alreadyInCart = carrinho.items.some((item) => item.name === param.name);
    if (!alreadyInCart) {
      setCarrinho({
        ...carrinho,
        items: [...carrinho.items, {
          name: param.name,
          price: param.newPrice,
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

      <section className="cards-container-combos">
        {
          // eslint-disable-next-line react/prop-types
          products.map((product) => (
            <div key={ product.id } className="card-promo-pr">
              <h1>{ product.title }</h1>
              <br />
              <img src={ product.image } alt={ product.name } />
              <h2>{ product.name }</h2>
              <small>
                { product.description }
              </small>
              <br />
              <small>
                { product.subDescription }
              </small>
              <br />
              <span className="old-price-pr">
                De:
                R$
                {' '}
                { product.oldPrice}
              </span>
              <span>
                Para:
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
