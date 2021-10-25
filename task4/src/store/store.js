import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
import reducer from './reducers/fetchAlbums';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));
export default store;