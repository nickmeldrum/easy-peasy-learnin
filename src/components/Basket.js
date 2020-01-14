import React from 'react';
import { useStoreState } from "easy-peasy";

export default function Basket() {
  const basketProducts = useStoreState(state =>
    state.basket.productIds.map(productId =>
      state.products.items.find(product => product.id === productId)
    )
  );
  return (
    <ul>
    {
      basketProducts.map(p => (
        <li key={p.id}>{p.name} at {p.price}</li>
      ))
    }
    </ul>
  );
}
