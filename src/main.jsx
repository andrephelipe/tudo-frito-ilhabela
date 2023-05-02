import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CarrinhoProvider from './Context/CarrinhoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </BrowserRouter>,
);
