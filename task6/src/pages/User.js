import React from "react";
import UserInfo from '../components/UserInfo'
import { useDispatch, useSelector } from "react-redux";
import store from '../store/store'

const User = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser'));
  return (
      activeUser.length && <div className="app"><div className="app__container"><UserInfo user={activeUser[0]}/></div></div>
    //  <div>{console.log(activeUser)}</div> 
  );
}

export default User;