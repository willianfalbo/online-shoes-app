import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-19-3-tf/60/COL-7866-060/COL-7866-060_zoom2.jpg?ts=1573056930&ims=326x"
                alt="Shoes"
              />
            </td>
            <td>
              <strong>Very nice shoes</strong>
              <span>$129.03</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readonly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$258.89</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Order Now</button>

        <Total>
          <span>Total</span>
          <strong>$212.90</strong>
        </Total>
      </footer>
    </Container>
  );
}
