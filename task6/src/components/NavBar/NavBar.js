import React, { useContext, useState } from "react";
import './NavBar.css';
import dataTypeContext from "../../context/dataTypeContext";
import Auth from "../../pages/Auth";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const NavBar = observer(() => {
  const [btnActive, setBtnActive] = useState(false);
  const [dataType, setDataType] = useState(null);
  const { user } = useContext(Context)
  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  function refreshPage() {
    window.location.reload(false);
  }

  return (<>
    {user.setIsAuth(localStorage.getItem('isLogin'))}
    {localStorage.getItem('isLogin') === 'true' ?
      <ul className='ul'>
        <li className='li'><Link to='/' className='a'>Home</Link></li>
        <li className='li'><Link to={`/user/${activeUser.map((user) => user.id)}`} className='a'>User</Link></li>
        <li className='li'><Link to={`/user/${activeUser.map((user) => user.id)}/albums`} className='a'>Albums</Link></li>
        <li className='about'> <button className="li-active" onClick={() => { localStorage.clear(); localStorage.setItem('isLogin', 'false'); user.setIsAuth(localStorage.getItem('isLogin')); refreshPage() }}>Logout</button></li>
      </ul>
      : <ul className='ul'>
        <li className='li'><Link to='/' className='a'>Home</Link></li>
        <li className='li'><Link to='/albums' className='a'>Albums</Link></li>
        <li className='about'> <button className="li-active" onClick={() => { setBtnActive('true'); setDataType('login'); }}>Login</button></li>
        <dataTypeContext.Provider value={dataType}>
          <Auth active={btnActive} setActive={setBtnActive} />
        </dataTypeContext.Provider>
      </ul>}
  </>
  );
})

export default NavBar;