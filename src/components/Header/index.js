import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logoImg from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Online Shoes App"></img>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
      </Cart>
    </Container>
  );
}

export default Header;
