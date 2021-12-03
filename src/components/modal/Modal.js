import React from "react"
import "./modal.scss"

const Modal = ({active, setActive}) => {

    

    return(
        <div className={active ? 'modal__active' : 'modal'} onClick={() => setActive(false)}> 
        <div className={'modal__content'} >

        </div>
        </div>
    )
}

export default Modal;