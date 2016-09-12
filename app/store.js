import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Add the reducer to your store on the `routing` key
let middlewares = [] 


if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}


let reducer = combineReducers({
    routing: routerReducer,
});


let store = createStore(reducer, applyMiddleware(...middlewares));

export default store;