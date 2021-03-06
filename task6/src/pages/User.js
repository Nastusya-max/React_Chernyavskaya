import React, { useContext } from "react";
import { useSelector } from "react-redux";
import UserInfo from '../components/UserInfo'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useParams } from 'react-router-dom';

const User = observer(() => {
  const { userId } = useParams();
  const { user } = useContext(Context);
  const fetchUsers = useSelector(({ fetchUsers }) => fetchUsers);

  return (
    user.isAuth &&
    <div className="app">
      <div className="app__container">
        {fetchUsers.filter(user => user.id === +userId).map((user) => <UserInfo key={user.id} user={user} />)}
      </div>
    </div>
  );
});

export default User;