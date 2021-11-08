import './App.css';
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/routing/AppRouter";
import NavBar from './components/NavBar/NavBar';
import { useDispatch } from "react-redux";
import axios from "axios";
import { usersFetchDataSuccess } from './store/actionCreators/user';
import { albumsFetchDataSuccess } from './store/actionCreators/albums';
import { photosFetchDataSuccess } from './store/actionCreators/photos';

const App = () => {
  const dispatch = useDispatch();

  function getUsers(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(usersFetchDataSuccess(res.data)));
    }
  }

  function getAlbums(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(albumsFetchDataSuccess(res.data)));
    }
  }

  function getPhotos(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(photosFetchDataSuccess(res.data)));
    }
  }

  useEffect(() => {
    dispatch(getUsers('https://jsonplaceholder.typicode.com/users'));
    dispatch(getAlbums('https://jsonplaceholder.typicode.com/albums'));
    dispatch(getPhotos('https://jsonplaceholder.typicode.com/photos'));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;