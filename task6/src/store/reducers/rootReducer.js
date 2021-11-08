import { combineReducers } from 'redux';
import { fetchAlbums } from './albums';
import { activeAlbums } from './albums';
import { fetchPhotos } from './photos';
import { addAlbums } from './albums';
import { addPhotos } from './photos';
import { fetchUsers } from './user';
import { activeUser } from './user';

const rootReducer = combineReducers({ fetchAlbums, activeAlbums, fetchPhotos, addAlbums, addPhotos, fetchUsers, activeUser });

export default rootReducer;