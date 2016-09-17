import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router'
import GameReducer from './reducers/gameReducer';
// Add the reducer to your store on the `routing` key
let middlewares = []


if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

middlewares.push(routerMiddleware(browserHistory));

let reducer = combineReducers({
  game: GameReducer,
  routing: routerReducer,
});


let store = createStore(reducer, applyMiddleware(...middlewares));

export default store;