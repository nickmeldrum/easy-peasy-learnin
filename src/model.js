import { action, thunk, computed, reducer } from 'easy-peasy';
import { routerReducer } from './router';
import { addProductToBasket } from './basket-service';

const productsModel = {
  items: [
    { id: '1', name: 'Broccoli', price: 2.50 },
    { id: '2', name: 'Carrots', price: 4 },
    { id: '232424', name: 'Toilet roll', price: 2.42 },
  ],
  getById: computed(state =>
    id => state.items.find(product => product.id === id)
  ),
  currentProduct: computed([
    state => state,
    (state, storeState) => storeState.router.location.pathname,
    ],
    (productModel, pathname) => pathname.startsWith('/products/') ? pathname.substring(10) : null,
  ),
};

const basketModel = {
  items: {
    '2': { quantity: 1 },
  },
  count: computed(state => Object.keys(state.items).reduce((cur, next) => {
    return cur + state.items[next].quantity;
  }, 0)),
  itemsWithProductInfo: computed([
    state => state.items,
    (state, storeState) => storeState.products.items,
  ],
  (basketItems, products) => Object.keys(basketItems).map(productId => {
      return {
        ...basketItems[productId],
        product: products.find(product => product.id === productId)
      };
    })
  ),
  addedProduct: action((state, payload) => {
    if (state.items[payload]) {
      state.items[payload].quantity += 1;
    }
    else {
      state.items[payload] = { quantity: 1 };
    }
  }),
  addProduct: thunk(async (actions, payload) => {
    await addProductToBasket(payload);
    actions.addedProduct(payload);
  }),
  removeProduct: action((state, payload) => {
    delete state.items[payload];
  }),
};

const storeModel = {
  router: reducer(routerReducer),
  products: productsModel,
  basket: basketModel
}

export default storeModel;
