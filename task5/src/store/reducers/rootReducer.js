import { combineReducers } from 'redux';
import { fetchAlbums } from './albums';
import { activeAlbums } from './albums';
import { fetchPhotos } from './photos';
import { addAlbums } from './albums';
import { addPhotos } from './photos';
import { addUser } from './user';

const rootReducer = combineReducers({ fetchAlbums, activeAlbums, fetchPhotos, addAlbums, addPhotos, addUser });

export default rootReducer;