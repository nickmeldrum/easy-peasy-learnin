import React, { useCallback } from 'react';
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Product({ id }) {
  const product = useStoreState(
    state => state.products.items.find(product => product.id === id)
  );

  const addProductToBasket = useStoreActions(
    actions => actions.basket.addProduct
  );

  const onAddToBasketClick = useCallback(async () => {
    addProductToBasket(product.id);
  }, [product]);

  return (
    <div>
      <h2>Product: {product.name}</h2>
      <div>cost: {product.price}</div>
      <button onClick={onAddToBasketClick}>Add to basket</button>
    </div>
  );
};
