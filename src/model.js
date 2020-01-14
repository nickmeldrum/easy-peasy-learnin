import { action } from 'easy-peasy';

const productsModel = {
  items: [
    { id: '1', name: 'Broccoli', price: 2.50 },
    { id: '2', name: 'Carrots', price: 4 },
  ],
};

const basketModel = {
  items: {
    '2': { quantity: 1 },
  },
  addProduct: action((state, payload) => {
    if (state.items[payload]) {
      state.items[payload].quantity += 1;
    }
    else {
      state.items[payload] = { quantity: 1 };
    }
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
