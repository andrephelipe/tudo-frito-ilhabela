/* eslint-disable no-nested-ternary */
/* eslint-disable max-lines */
// react
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

// provider
import CarrinhoContext from '../Context/CarrinhoContext';

// css
import './carrinho.css';

// componetes
import Pagamento from '../Components/Pagamento';
import frete from '../Data/Frete';

function Carrinho() {
  const history = useHistory();

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
  const [telefone, setTelefone] = useState('');
  const [referencia, setReferencia] = useState('');

  const [isEntrega, setIsEntrega] = useState(false);

  function handleBairroChange(event) {
    const bairroId = event.target.value;
    const bairro = frete.find((b) => b.id === Number(bairroId));
    if (bairro) {
      setBairroSelecionado(bairro);
      setValorEntrega(bairro.preco);
    }
  }

  function handleGoBack() {
    history.goBack();
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
    mensagem += `${item.name}${item.tamanho ? ` - (${item.tamanho})` : ''}
  - ${quantidades[index]} unidade(s)
    R$ ${(item.price * quantidades[index]).toFixed(2)}\n `;
  });

  if (isEntrega) {
    mensagem += `\nCliente: ${nome} \n${rua}, ${numero} - ${bairroSelecionado.nome}`;
    mensagem += `\nPonto de referencia: ${referencia}`;
    mensagem += `\ntel: ${telefone}`;
    mensagem += `\npagamento: ${pagamento}\n`;
    mensagem += troco ? `\ntroco para R$ ${(Number(troco)).toFixed(2)}\n` : '';
    mensagem += `\nPedido: R$ ${(total.toFixed(2) - valorEntrega.toFixed(2)).toFixed(2)}`;
    mensagem += `\nFrete: R$ ${valorEntrega.toFixed(2)}`;
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    mensagem += pagamento === 'pix' ? '\n*ENVIE O COMPROVANTE VIA WHATSAPP*' : '';
  } else {
    mensagem += `\nCliente: ${nome} \nRetirar no local \nTotal: R$ ${total.toFixed(2)}`;
  }

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  return (
    <section className="container-carrinho-checkout">
      <button className="no-style-button" onClick={ handleGoBack }>
        <p>
          <HiArrowNarrowLeft size={ 30 } color="black" />
        </p>
      </button>

      <h2 className="h2-carrinho-checkout">CARRINHO</h2>

      <div className="products-carrinho-checkout">
        {
          items.length === 0
            ? <p className="sem-produto-no-carrinho">Não ha nenhum produto no carrinho</p>
            : (
              <div className="tudo-container-do-carrinho-checkout">
                <ul className="lista-produtos-do-carrinho">
                  {items.map((item, index) => (
                    <li className="itens" key={ index }>
                      <div className="container-sabor-carrinho-checkout">
                        {item.name}
                        {item.tamanho && (
                          <span>
                            {' '}
                            -
                            {' '}
                            (
                            {item.tamanho}
                            )
                          </span>)}
                      </div>

                      <button
                        className="btn-menos-car"
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
                        className="btn-mais-car"
                        onClick={ () => {
                          const newQuantidades = [...quantidades];
                          newQuantidades[index]++;
                          setQuantidades(newQuantidades);
                        } }
                      >
                        +

                      </button>

                      <span className="price-all-car">
                        R$
                        {' '}
                        { (item.price * quantidades[index]).toFixed(2) }
                      </span>

                      <button
                        className="excluir-carrinho"
                        onClick={ () => {
                          removerItem(index);
                        } }
                      >
                        Excluir
                      </button>

                    </li>
                  ))}
                </ul>

                <strong>TODOS OS CAMPOS COM (*) SÃO OBRIGATÓRIOS</strong>
                <br />

                <div className="entrega-infos-carrinho">
                  <form className="entrega-carrinho-checkout">
                    <div className="retirar-no-local">
                      <input
                        type="checkbox"
                        name="local"
                        id="local"
                        checked={ !isEntrega }
                        onChange={ () => setIsEntrega(false) }
                      />
                      <label htmlFor="local">Retirar no local</label>
                    </div>

                    <div className="entrega-via-motoboy">
                      <input
                        type="checkbox"
                        name="entrega"
                        id="entrega"
                        checked={ isEntrega }
                        onChange={ () => setIsEntrega(true) }
                      />
                      <label htmlFor="entrega">Endereco da entrega</label>
                    </div>

                    <label htmlFor="nome">Nome*</label>
                    <input
                      className="input-name-carrinho-checkout"
                      type="text"
                      value={ nome }
                      name="nome"
                      onChange={ (e) => setNome(e.target.value) }
                    />
                  </form>
                </div>

                <section className="entrega-container-checkout">
                  {isEntrega && (
                    <>
                      <div className="form-container-carrinho-checkout">
                        <form className="form-endereco-carrinho-checkout">
                          <label htmlFor="telefone">Telefone*</label>
                          <input
                            type="number"
                            name="telefone"
                            value={ telefone }
                            onChange={ (e) => setTelefone(e.target.value) }
                          />

                          <label htmlFor="rua">Rua / Avenida*</label>
                          <input
                            type="text"
                            name="rua"
                            value={ rua }
                            onChange={ (e) => setRua(e.target.value) }
                          />

                          <label htmlFor="numero">Número*</label>
                          <input
                            type="text"
                            name="numero"
                            value={ numero }
                            onChange={ (e) => setNumero(e.target.value) }
                          />

                          <label htmlFor="referencia">Ponto de Referencia*</label>
                          <input
                            type="text"
                            name="referencia"
                            value={ referencia }
                            onChange={ (e) => setReferencia(e.target.value) }
                          />

                          <label htmlFor="bairro">Bairro*</label>
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
                </section>

                <footer className="footer-end-carrinho-checkout">
                  <span className="font-carrinho-checkout">
                    Pedido R$
                    {' '}
                    {(total.toFixed(2) - valorEntrega.toFixed(2)).toFixed(2)}
                  </span>
                  <span className="font-carrinho-checkout">
                    Frete R$
                    {' '}
                    {valorEntrega.toFixed(2)}
                  </span>

                  <p>
                    Total R$
                    {' '}
                    { (total).toFixed(2) }
                  </p>

                  <div>
                    {!isEntrega && nome ? (
                      <a
                        href={ linkWhatsApp }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-finalizar"
                      >
                        Finalizar pedido
                      </a>
                    // eslint-disable-next-line max-len
                    ) : isEntrega && nome && telefone && rua && numero && pagamento && referencia ? (
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
                        Insira todas as informações necessárias para finalizar o pedido
                      </small>
                    )}
                  </div>

                </footer>
              </div>
            )
        }
      </div>
    </section>
  );
}

export default Carrinho;
