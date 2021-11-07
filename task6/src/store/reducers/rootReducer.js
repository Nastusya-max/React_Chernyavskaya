import { combineReducers } from 'redux';
import { fetchAlbums } from './albums';
import { activeAlbums } from './albums';
import { fetchPhotos } from './photos';
import { addAlbums } from './albums';
import { addPhotos } from './photos';
import { addUser } from './user';
import { fetchUsers } from './user';

const rootReducer = combineReducers({ fetchAlbums, activeAlbums, fetchPhotos, addAlbums, addPhotos, fetchUsers, addUser });

export default rootReducer;