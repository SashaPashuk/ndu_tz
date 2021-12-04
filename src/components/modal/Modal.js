import React from "react"
import "./modal.scss"

const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} > 
        <div className={active ? 'modal__content active' : 'modal_content'} onClick={e => e.stopPropagation}>
          {children}
          <div className={'close_modal'} onClick={() => setActive(false)}></div>
        </div>
        </div>
    )
}

export default Modal;