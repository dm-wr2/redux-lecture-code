import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({
    reducer,
    pokeReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));