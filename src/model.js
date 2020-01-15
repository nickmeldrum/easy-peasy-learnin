import { action, thunk, computed } from 'easy-peasy';
import { addProductToBasket } from './basket-service';

const productsModel = {
  items: [
    { id: '1', name: 'Broccoli', price: 2.50 },
    { id: '2', name: 'Carrots', price: 4 },
  ],
  getById: computed(state =>
    id => state.items.find(product => product.id === id)
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
  products: productsModel,
  basket: basketModel
}

export default storeModel;
