import { createStore } from 'easy-peasy';
import { routerMiddleware } from './router';
import storeModel from './model';

const store = createStore(storeModel, {middleware: [routerMiddleware]});

export default store;
