import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Product() {
  const { productId } = useParams();
  const product = useStoreState(state => state.products.getById(productId));

  const addProductToBasket = useStoreActions(
    actions => actions.basket.addProduct
  );

  const onAddToBasketClick = useCallback(async () => {
    addProductToBasket(product.id);
  }, [product, addProductToBasket]);

  return (
    <div>
      <h2>Product: {product && product.name}</h2>
      <div>cost: £{product && product.price}</div>
      <button onClick={onAddToBasketClick}>Add to basket</button>
    </div>
  );
};
