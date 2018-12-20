import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from '../store/initial-state';

// Change initialState to function

export default createStore(rootReducer, initialState, applyMiddleware(thunk))
