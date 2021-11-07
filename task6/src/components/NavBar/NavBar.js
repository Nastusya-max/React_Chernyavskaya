import React, { useState } from "react";
import './NavBar.css';
import dataTypeContext from "../../context/dataTypeContext";
import Auth from "../../pages/Auth";
import { useEffect } from "react";

const NavBar = () => {
  const [btnActive, setBtnActive] = useState(false);
  const [dataType, setDataType] = useState(null);
  const [isLogin, setIsLogin] = React.useState('false');

  useEffect(() => {
  }, [isLogin]);

  return (
    localStorage.getItem('isLogin') === 'true' ?
      <ul className='ul'>
        <li className='li'><a href='/' className='a'>Home</a></li>
        <li className='li'><a href='/user/:userId' className='a'>User</a></li>
        <li className='li'><a href='/albums' className='a'>Albums</a></li>
        <li className='about'> <button className="li-active" onClick={() => { localStorage.setItem('isLogin', 'false'); setIsLogin('false') }}>Logout</button></li>
      </ul>
      : <ul className='ul'>
        <li className='li'><a href='/user/:userId' className='a'>User</a></li>
        <li className='li'><a href='/albums' className='a'>Albums</a></li>
        <li className='about'> <button className="li-active" onClick={() => { setIsLogin('true'); setBtnActive('true'); setDataType('login') }}>Login</button></li>
        <dataTypeContext.Provider value={dataType}>
          <Auth active={btnActive} setActive={setBtnActive} />
        </dataTypeContext.Provider>
      </ul>
  );
}

export default NavBar;