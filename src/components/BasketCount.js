import React from 'react';
import { useStoreState } from "easy-peasy";

export default function BasketCount() {
  const basketCount = useStoreState(state => state.basket.count);
  const currentProduct = useStoreState(state => state.products.currentProduct);
  return (
    <>
      <div>count: {basketCount}</div>
      <div>currentProduct: {currentProduct}</div>
    </>
  );
};
