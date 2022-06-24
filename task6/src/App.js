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

  const getData = (src, actionCreator) => {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(actionCreator(res.data)));
    }
  }

  useEffect(() => {
    dispatch(getData('https://jsonplaceholder.typicode.com/users', usersFetchDataSuccess));
    dispatch(getData('https://jsonplaceholder.typicode.com/albums', albumsFetchDataSuccess));
    dispatch(getData('https://jsonplaceholder.typicode.com/photos', photosFetchDataSuccess));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;