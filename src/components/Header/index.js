import React from 'react';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Logo to="/">SHOES APP</Logo>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
