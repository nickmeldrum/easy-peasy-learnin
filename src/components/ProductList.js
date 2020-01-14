import React from 'react';
import { useStoreState } from "easy-peasy";

export default function ProductList() {
  const products = useStoreState(state => state.products.items);

  return (
    <ul>
    {
      products.map(p => (
        <li key={p.id}>{p.name} at {p.price}</li>
      ))
    }
    </ul>
  );
};
