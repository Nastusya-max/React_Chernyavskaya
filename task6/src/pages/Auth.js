import React, { useContext } from "react";
import '../components/Form/form.css';
import { useForm } from "react-hook-form";
import Modal from '../components/Modal/Modal';
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from '../store/actionCreators/user';
import { Context } from '../index';
import {observer} from 'mobx-react-lite'

const Auth = observer(({ active, setActive }) => {
  const fetchUsers = useSelector(({ fetchUsers }) => fetchUsers);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const {user} = useContext(Context)

  const onSubmitPhoto = (data) => {
    document.querySelector('#albumTitle-label').innerHTML = 'Enter the title of the album (required)';
    if (fetchUsers.filter(item => (item.email === data.email && item.name === data.name)).length) {
      localStorage.setItem('isLogin', 'true');
      user.setIsAuth(localStorage.getItem('isLogin'))
      const activeUser = fetchUsers.filter(item => (item.email === data.email && item.name === data.name));
      dispatch(setActiveUser(activeUser));
      localStorage.setItem('activeUser', JSON.stringify(activeUser));

    } else {
      document.querySelector('#albumTitle-label').innerHTML = 'There is no album with that name';
    }
  };

  return <div>
    <Modal active={active} setActive={setActive}>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmitPhoto)}>
          <input id='albumTitle' {...register("email")} placeholder="email" required></input><br />
          <label id='albumTitle-label' htmlFor="albumTitle">Enter email (required)</label><br />
          <input id='url' {...register("name")} placeholder="name" required></input><br />
          <label id='url-label' htmlFor="url">Enter password (required)</label><br />
          <button className='submit-btn' type="submit">Login</button>
        </form>
      </div>
    </Modal>
  </div>
})

export default Auth;