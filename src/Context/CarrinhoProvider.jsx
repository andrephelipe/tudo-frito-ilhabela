import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import CarrinhoContext from './CarrinhoContext';

function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState({ items: [] });

  const values = useMemo(() => ({
    carrinho,
    setCarrinho,
  }), [carrinho]);

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
