import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
const middlwares = [logger,thunk];
const store = createStore(rootReducer, applyMiddleware(...middlwares))

 
export default store;