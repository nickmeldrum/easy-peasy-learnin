import React from 'react';
import { useStoreState } from "easy-peasy";

export default function BasketCount() {
  const basketCount = useStoreState(state => state.basket.productIds.length);
  return (
    <div>count: {basketCount}</div>
  );
};
