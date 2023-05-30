import { useContext, useState } from 'react';
import CarrinhoContext from '../Context/CarrinhoContext';

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
    <div>
      <h2>Forma de pagamento</h2>

      <div>
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

      <div>
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

      <div>
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

      <div>
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

      <div>
        {pagamento === 'pix' && (
          <div>
            <small>{textToCopy}</small>
            {!isCopied ? (
              <button onClick={ copyToClipboard }>Copiar</button>
            ) : (
              <>
                <br />
                <span>Copiado!</span>
              </>
            )}
          </div>
        )}
      </div>

      {pagamento === 'dinheiro' && (
        <div>
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
