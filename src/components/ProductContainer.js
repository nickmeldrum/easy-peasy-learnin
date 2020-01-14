import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

export default function ProductContainer() {
  const { productId } = useParams();
  return <Product id={productId} />;
}
