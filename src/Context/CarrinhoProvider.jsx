import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import CarrinhoContext from './CarrinhoContext';

function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState({ items: [] });
  const [pagamento, setPagamento] = useState('');
  const [troco, setTroco] = useState();

  const values = useMemo(() => ({
    carrinho,
    setCarrinho,
    pagamento,
    setPagamento,
    troco,
    setTroco,
  }), [carrinho, pagamento, troco]);

  return (
    <CarrinhoContext.Provider value={ values }>
      { children }
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoProvider;

CarrinhoProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
