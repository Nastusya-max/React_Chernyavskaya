import './App.css';
import Content from './components/Content';
import UserInfo from './components/UserInfo';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import user from './constants/user.json'
import { addUser } from './store/actionCreators/user';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(addUser(user));
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app__container">
        <UserInfo user={user} />
        <Content />
      </div>
    </div>
  );
}

export default App;
