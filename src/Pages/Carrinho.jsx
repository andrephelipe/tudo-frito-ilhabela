/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import CarrinhoContext from '../Context/CarrinhoContext';
// import './carrinho.css';
import Pagamento from '../Components/Pagamento';
import frete from '../Data/Frete';

function Carrinho() {
  const { carrinho: { items },
    setCarrinho,
    pagamento,
    troco,
  } = useContext(CarrinhoContext);
  const [quantidades, setQuantidades] = useState(items.map(() => 1));
  const [total, setTotal] = useState(0);

  const [bairroSelecionado, setBairroSelecionado] = useState('');
  const [valorEntrega, setValorEntrega] = useState(0);

  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');

  const [isEntrega, setIsEntrega] = useState(false);

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
    setTotal(newTotal + valorEntrega);
  }, [items, quantidades, valorEntrega]);

  const numeroWhatsApp = '+5512974108554';
  let mensagem = 'Olá, gostaria de fazer um pedido com os seguintes itens:\n\n';
  items.forEach((item, index) => {
    mensagem += `${item.name}${item.sabor ? ` - (${item.sabor})` : ''}
  - ${quantidades[index]} unidade(s)
    R$ ${(item.price * quantidades[index]).toFixed(2)}\n `;
  });

  if (isEntrega) {
    mensagem += `\nCliente: ${nome} \n${rua}, ${numero} - ${bairroSelecionado.nome}`;
    mensagem += `\npagamento: ${pagamento}\n`;
    mensagem += troco ? `\ntroco para R$ ${(Number(troco)).toFixed(2)}\n` : '';
    mensagem += `\nFrete: R$ ${valorEntrega.toFixed(2)}`;
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    mensagem += pagamento === 'pix' ? '\n*MANDE O COMPROVANTE VIA WHATSAPP*' : '';
  } else {
    mensagem += `\nCliente: ${nome} \nRetirar no local \nTotal: R$ ${total.toFixed(2)}`;
  }

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  return (
    <section>
      <Link to="/">
        <p>
          <HiArrowNarrowLeft size={ 30 } color="black" />
        </p>
      </Link>

      <h2 className="h2-carrinho">CARRINHO</h2>
      {
        items.length === 0
          ? <p>Não ha nenhum produto no carrinho</p>
          : (
            <>
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

              <div>
                <div className="entrega">
                  <div>
                    <input
                      type="checkbox"
                      name="local"
                      id="local"
                      checked={ !isEntrega }
                      onChange={ () => setIsEntrega(false) }
                    />
                    <label htmlFor="local">Retirar no local</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      name="entrega"
                      id="entrega"
                      checked={ isEntrega }
                      onChange={ () => setIsEntrega(true) }
                    />
                    <label htmlFor="entrega">Endereco da entrega</label>
                  </div>

                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    value={ nome }
                    name="nome"
                    onChange={ (e) => setNome(e.target.value) }
                  />
                </div>

                {isEntrega && (
                  <>
                    <div className="form-container">
                      <form className="form-endereco">
                        <label htmlFor="rua">Rua</label>
                        <input
                          type="text"
                          name="rua"
                          value={ rua }
                          onChange={ (e) => setRua(e.target.value) }
                        />

                        <label htmlFor="numero">Número</label>
                        <input
                          type="text"
                          name="numero"
                          value={ numero }
                          onChange={ (e) => setNumero(e.target.value) }
                        />

                        <label htmlFor="bairro">Bairro</label>
                        <select
                          name="bairro"
                          id="bairro"
                          onChange={ handleBairroChange }
                        >
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
                    <Pagamento />

                  </>
                )}
              </div>
              <footer className="footer-end">
                <span className="font">
                  Pedido R$
                  {' '}
                  {(total.toFixed(2) - valorEntrega).toFixed(2)}
                </span>
                <span className="font">
                  Frete R$
                  {' '}
                  {valorEntrega.toFixed(2)}
                </span>

                <p>
                  Total R$
                  {' '}
                  { (total).toFixed(2) }
                </p>
                { nome ? (
                  <a
                    href={ linkWhatsApp }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-finalizar"
                  >
                    Finalizar pedido
                  </a>
                ) : (
                  <small disabled>
                    Insira seu nome e o estilo de  entrega para finalizar o pedido
                  </small>
                )}
              </footer>
            </>
          )
      }
    </section>
  );
}

export default Carrinho;
