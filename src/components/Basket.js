import React from 'react';
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Basket() {
  const basketProducts = useStoreState(state =>
    Object.keys(state.basket.items).map(productId => {
      return {
        ...state.basket.items[productId],
        product: state.products.items.find(product => product.id === productId)
      };
    })
  );

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
