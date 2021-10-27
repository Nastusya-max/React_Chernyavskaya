import { combineReducers } from 'redux';
import { fetchAlbums } from './albums';
import { activeAlbum } from './albums';
import photos from './photos';
// import photos from '../actionCreators/photos';
// import fetchData from './fetchAlbums';

const rootReducer = combineReducers({fetchAlbums, activeAlbum, photos });

export default rootReducer;