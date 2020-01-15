import React from 'react';
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Basket() {
  const basketProducts = useStoreState(state => state.basket.itemsWithProductInfo);

  const removeProductFromBasket = useStoreActions(
    actions => actions.basket.removeProduct,
  );
  return (
    <ul>
    {
      basketProducts.map(p => (
        <li key={p.product.id}>{p.quantity} {p.product.name} at £{p.product.price}
        <button onClick={() => removeProductFromBasket(p.product.id)}>Remove</button>
        </li>
      ))
    }
    </ul>
  );
}
