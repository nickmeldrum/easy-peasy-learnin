import React from 'react';
import { useStoreState } from "easy-peasy";

export default function BasketCount() {
  const basketCount = useStoreState(state => Object.keys(state.basket.items).reduce((cur, next) => {
    return cur + state.basket.items[next].quantity;
  }, 0));
  return (
    <div>count: {basketCount}</div>
  );
};
