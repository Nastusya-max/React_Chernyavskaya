import React, { useContext } from "react";
import UserInfo from '../components/UserInfo'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const User = observer(() => {
  const { user } = useContext(Context)
  const activeUser = JSON.parse(localStorage.getItem('activeUser'));
  return (
    user.isAuth === 'true' ?
      <div className="app">
        <div className="app__container">
          <UserInfo user={activeUser[0]} />
        </div>
      </div>
    : <> </>
  );
});

export default User;