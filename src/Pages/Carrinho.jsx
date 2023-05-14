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

  const numeroWhatsApp = '+5512974108554';
  let mensagem = 'Olá, gostaria de fazer um pedido com os seguintes itens:\n\n';
  items.forEach((item, index) => {
    mensagem += `${item.name}${item.sabor ? ` - (${item.sabor})` : ''}
    - ${quantidades[index]} unidade(s) - R$ ${item.price * quantidades[index]}\n`;
  });
  mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  const finalizarPedido = () => {
    console.log('oi');
  };

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

              <ul>
                {items.map((item, index) => (
                  <li key={ index }>
                    <div>
                      {item.name}
                      {item.sabor && (
                        <span>
                          {' '}
                          -
                          {' '}
                          (
                          {item.sabor}
                          )
                        </span>)}
                    </div>
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
            )
        }
      </main>

      <div className="form-container">

        <form className="form-endereco">
          <label htmlFor="nome">Nome</label>
          {' '}
          <input type="text" />

          <label htmlFor="endereco">Rua</label>
          <input type="text" />

          <label htmlFor="numero">Número</label>
          <input type="text" />

          <label htmlFor="bairro">Bairro</label>
          <select name="" id="">
            <option value="canada">canada</option>
          </select>
        </form>
      </div>

      <footer className="footer-end">
        <span className="container-data">
          Total: R$
          {' '}
          {total.toFixed(2)}
        </span>
        <a
          href={ linkWhatsApp }
          target="_blank"
          rel="noopener noreferrer"
          className="btn-finalizar"
        >
          Finalizar pedido
        </a>
      </footer>
    </section>
  );
}

export default Carrinho;
