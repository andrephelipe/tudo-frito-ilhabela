import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import CarrinhoContext from '../Context/CarrinhoContext';
import './Style/Header.css';
import logo from '../../Assets/logo.jpg';

function Header() {
  const { carrinho: { items } } = useContext(CarrinhoContext);
  const NUM = -1;
  return (
    <section className="container_header">
      <div className="container-logo">
        <img className="logo" src={ logo } alt="" />
      </div>
      <div className="cart-button">
        <Link to="/carrinho">
          <BsFillCartCheckFill size={ 35 } color="black" />
          {items.length > NUM && (
            <span className="cart-count">{items.length}</span>
          )}
        </Link>
      </div>
      <header />
    </section>
  );
}

export default Header;
