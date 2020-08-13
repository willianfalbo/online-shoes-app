import { createStore } from 'redux';
import reducers from './modules/rootReducer';
import * as config from '../config';

const enhacer =
  config.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(reducers, enhacer);

export default store;
