import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import * as config from '../config';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  config.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
