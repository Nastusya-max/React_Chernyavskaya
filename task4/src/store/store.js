import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import albums from './reducers/albums';
import photos from './actionCreators/photos';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;