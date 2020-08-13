import { createStore } from 'redux';
import reducers from './modules/rootReducer';
import * as config from '../config';

const enhancer =
  config.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(reducers, enhancer);

export default store;
