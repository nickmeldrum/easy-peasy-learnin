import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import Product from './Product';
import Basket from './Basket';
import BasketCount from './BasketCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SellStuff Store Inc.</p>
      </header>
    <article>
      <Link to="/">Products</Link>

      <Switch>
        <Route path={'/products/:productId'}>
          <Product />
        </Route>
        <Route path={'/'}>
          <h2>Products:</h2>
          <ProductList />
        </Route>
      </Switch>

      <h2>My basket:</h2>
      <Basket />

      <h2>My basket count:</h2>
      <BasketCount />
    </article>
    </div>
  );
}

export default App;
