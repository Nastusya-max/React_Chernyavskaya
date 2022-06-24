import './modal.css'
import { useContext } from 'react';
import dataTypeContext from '../../context/dataTypeContext';

function Modal({ active, setActive, children }) {
  return <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
    <div className='modal__content' onClick={e => e.stopPropagation()}>
      <div className="btn-holder">
        <span className='title-name'>Title: {useContext(dataTypeContext)}</span>
        <button className='close-modal' onClick={() => setActive(false)}>{'\u2716'}</button>
      </div>
      {children}
    </div>
  </div>
}

export default Modal;