import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-19-3-tf/60/COL-7866-060/COL-7866-060_zoom2.jpg?ts=1573056930&ims=326x"
          alt="Shoes"
        />
        <strong>Very nice shoes</strong>
        <span>$129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-19-3-tf/60/COL-7866-060/COL-7866-060_zoom2.jpg?ts=1573056930&ims=326x"
          alt="Shoes"
        />
        <strong>Very nice shoes</strong>
        <span>$129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-19-3-tf/60/COL-7866-060/COL-7866-060_zoom2.jpg?ts=1573056930&ims=326x"
          alt="Shoes"
        />
        <strong>Very nice shoes</strong>
        <span>$129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
    </ProductList>
  );
}
