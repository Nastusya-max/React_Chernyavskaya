import './modal.css'

function Modal({active, setActive, children}) {
  return <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
    <div className='modal__content' onClick={e => e.stopPropagation()}>
      <button className='close-modal' onClick={() => setActive(false)}>{'\u2716'}</button>
      {children}
    </div>
  </div>
}

export default Modal;