import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import CarrinhoContext from '../Context/CarrinhoContext';
import './carrinho.css';
import frete from '../Data/Frete';

function Carrinho() {
  const { carrinho: { items }, setCarrinho } = useContext(CarrinhoContext);
  const [quantidades, setQuantidades] = useState(items.map(() => 1));
  const [total, setTotal] = useState(0);
  const [bairroSelecionado, setBairroSelecionado] = useState(null);
  const [valorEntrega, setValorEntrega] = useState(0);

  function handleBairroChange(event) {
    const bairroId = event.target.value;
    const bairro = frete.find((b) => b.id === Number(bairroId));
    if (bairro) {
      setBairroSelecionado(bairro);
      setValorEntrega(bairro.preco);
    }
  }

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

  return (
    <section>
      <Link to="/">
        <p>
          <HiArrowNarrowLeft size={ 30 } color="black" />
        </p>
      </Link>

      <main>
        <h2 className="h2-carrinho">CARRINHO</h2>
        {
          items.length === 0
            ? <p>Não ha nenhum produto no carrinho</p>
            : (

              <ul className="lista-produtos">
                {items.map((item, index) => (
                  <li className="itens" key={ index }>
                    <div className="container-sabor">
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

                    <button
                      className="btn-menos"
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

                    <p className="qtd">{quantidades[index]}</p>

                    <button
                      className="btn-mais"
                      onClick={ () => {
                        const newQuantidades = [...quantidades];
                        newQuantidades[index]++;
                        setQuantidades(newQuantidades);
                      } }
                    >
                      +

                    </button>

                    <span className="price-all">
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
          <select name="bairro" id="bairro" onChange={ handleBairroChange }>
            {frete.map((bairro) => (
              <option key={ bairro.id } value={ bairro.id }>
                {bairro.nome}
                {' '}
                - R$
                {bairro.preco.toFixed(2)}
              </option>
            ))}
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
