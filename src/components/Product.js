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
  }, [product, addProductToBasket]);

  return (
    <div>
      <h1>product id: {id}</h1>
      <h2>Product: {product && product.name}</h2>
      <div>cost: {product && product.price}</div>
      <button onClick={onAddToBasketClick}>Add to basket</button>
    </div>
  );
};
