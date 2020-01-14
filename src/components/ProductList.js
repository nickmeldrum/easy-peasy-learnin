import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from "easy-peasy";

export default function ProductList() {
  const products = useStoreState(state => state.products.items);

  return (
    <ul>
    {
      products.map(p => (
        <li key={p.id}>
          <Link to={'/products/' + p.id}>{p.name}</Link> at £{p.price}</li>
      ))
    }
    </ul>
  );
};
