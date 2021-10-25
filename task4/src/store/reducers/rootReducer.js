import { combineReducers } from 'redux';
import albums from '../actionCreators/albums';
import photos from '../actionCreators/photos';

const rootReducer = combineReducers({ albums, photos });

export default rootReducer;