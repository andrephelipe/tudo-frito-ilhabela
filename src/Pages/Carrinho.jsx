import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import CarrinhoContext from '../Context/CarrinhoContext';
import './carrinho.css';

function Carrinho() {
  const { carrinho: { items }, setCarrinho } = useContext(CarrinhoContext);
  const [quantidades, setQuantidades] = useState(items.map(() => 1));
  const [total, setTotal] = useState(0);

  function removerItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setCarrinho({ items: newItems });
  }

  useEffect(() => {
    let newTotal = 0;
    items.forEach((item, index) => {
      newTotal += item.price * quantidades[index];
    });
    setTotal(newTotal);
  }, [items, quantidades]);

  return (
    <section>
      <Link to="/">
        <p>
          <HiArrowNarrowLeft size={ 30 } color="black" />
        </p>
      </Link>

      <main>
        <h2>CARRINHO</h2>
        {
          items.length === 0
            ? <p>Nao ha nenhum produto no carrinho</p>
            : (

              <>
                <ul>
                  {items.map((item, index) => (
                    <li key={ index }>
                      <div>{item.name}</div>
                      <span>
                        R$
                        {' '}
                        {item.price}
                      </span>

                      <button
                        onClick={ () => {
                          const newQuantidades = [...quantidades];
                          if (newQuantidades[index] > 0) {
                            newQuantidades[index]--;
                            setQuantidades(newQuantidades);
                          }
                        } }
                      >
                        -

                      </button>

                      <p>{quantidades[index]}</p>

                      <button
                        onClick={ () => {
                          const newQuantidades = [...quantidades];
                          newQuantidades[index]++;
                          setQuantidades(newQuantidades);
                        } }
                      >
                        +

                      </button>

                      <span>
                        R$
                        {' '}
                        { (item.price * quantidades[index]).toFixed(2) }
                      </span>

                      <button
                        className="excluir"
                        onClick={ () => {
                          removerItem(index);
                        } }
                      >
                        Excluir
                      </button>

                    </li>
                  ))}
                </ul>
                <span>
                  Total: R$
                  {' '}
                  {total.toFixed(2)}
                </span>
                <button
                  type="button"
                  disabled
                >
                  Finalizar pedido
                </button>

              </>
            )
        }
      </main>
    </section>
  );
}

export default Carrinho;
