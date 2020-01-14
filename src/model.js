import { action } from 'easy-peasy';

const productsModel = {
  items: [
    { id: 1, name: 'Broccoli', price: 2.50 },
    { id: 2, name: 'Carrots', price: 4 },
  ],
};

const basketModel = {
  productIds: [2],
  addProduct: action((state, payload) => {
    state.productIds.push(payload);
  }),
  removeProduct: action((state, payload) => {
    state.productIds.splice(payload, 1);
  }),
};

const storeModel = {
  products: productsModel,
  basket: basketModel
}

export default storeModel;
