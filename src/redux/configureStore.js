import {
  applyMiddleware, createStore, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './home';
import companyReducer from './company';

const middlewareList = [thunk, logger];

const reducer = combineReducers({
  countriesReducer,
  companyReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(...middlewareList),
);

export default store;
