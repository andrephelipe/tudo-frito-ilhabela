/* eslint-disable max-len */
import { useContext, useState } from 'react';
import CarrinhoContext from '../Context/CarrinhoContext';

import './Style/Pagamento.css';

function Pagamento() {
  const { pagamento,
    setPagamento,
    troco,
    setTroco,
  } = useContext(CarrinhoContext);

  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = 'tudofritoilhabela@gmail.com';

  const handlePagamentoChange = (event) => {
    setPagamento(event.target.value);
  };

  const handleTrocoChange = (event) => {
    setTroco(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };

  return (
    <div className="container-pagamento">
      <h2>Forma de pagamento</h2>

      <div className="opcao-pagamento">
        <input
          id="pix"
          name="pix"
          value="pix"
          type="radio"
          checked={ pagamento === 'pix' }
          onChange={ handlePagamentoChange }
        />
        <label htmlFor="pix">PIX</label>
      </div>

      <div className="opcao-pagamento">
        <input
          id="cartao de credito"
          name="cartao de credito"
          value="cartao de credito"
          type="radio"
          checked={ pagamento === 'cartao de credito' }
          onChange={ handlePagamentoChange }
        />
        <label htmlFor="cartao de credito">Cartão de Crédito</label>
      </div>

      <div className="opcao-pagamento">
        <input
          id="cartao de debito"
          name="cartao de debito"
          value="cartao de debito"
          type="radio"
          checked={ pagamento === 'cartao de debito' }
          onChange={ handlePagamentoChange }
        />
        <label htmlFor="cartao de debito">Cartão de Débito</label>
      </div>

      <div className="opcao-pagamento">
        <input
          id="dinheiro"
          name="dinheiro"
          value="dinheiro"
          type="radio"
          checked={ pagamento === 'dinheiro' }
          onChange={ handlePagamentoChange }
        />
        <label htmlFor="dinheiro">Dinheiro</label>
      </div>

      <div className="opcao-pagamento">
        {pagamento === 'pix' && (
          <div>
            <div className="mensagem-pixie">
              <p>PAGAMENTOS VIA PIX SÓ SERÃO VALIDADOS APÓS O ENVIO DO COMPROVANTE VIA WHATSAPP.</p>
              <em className="pixie">{textToCopy}</em>
            </div>
            <div className="btn-copiar-carrinho">
              {!isCopied ? (
                <button onClick={ copyToClipboard }>
                  Copiar
                </button>
              ) : (
                <>
                  <br />
                  <span>Copiado!</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {pagamento === 'dinheiro' && (
        <div className="opcao-pagamento-dinheiro">
          <label htmlFor="troco">Troco para:</label>
          <input
            id="troco"
            name="troco"
            type="number"
            value={ troco }
            onChange={ handleTrocoChange }
          />
        </div>
      )}
    </div>
  );
}

export default Pagamento;
