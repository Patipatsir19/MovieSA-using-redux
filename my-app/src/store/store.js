import { legacy_createStore as createStore } from "redux";
import {applyMiddleware} from'redux';
import logger from 'redux-logger'
import rootreducer from "./rootreducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

const store = createStore(
  rootreducer,
  composedEnhancers,
);

export default store;
