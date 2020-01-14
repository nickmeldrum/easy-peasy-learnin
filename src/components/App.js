import React from 'react';
import './App.css';
import ProductList from './ProductList';
import Basket from './Basket';
import BasketCount from './BasketCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SellStuff Store Inc.
        </p>
      </header>
    <article>
      <h2>Products:</h2>
      <ProductList />

      <h2>My basket:</h2>
      <Basket />

      <h2>My basket count:</h2>
      <BasketCount />
    </article>
    </div>
  );
}

export default App;
