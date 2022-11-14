import React, { useState, useEffect, useRef } from "react";


import './modal.styles.scss'

const Modal = props => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    return (
        <div id={props.id} className={`modal ${active ? "active" : ""}`}>
            {props.children}
        </div>
    )
}

export const ModalContent = props => {
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();
    }
    return (
        <div ref={contentRef} className="modal_content" >
            {props.children}
            <div className="modal_content_close" onClick={closeModal}>
                <span>X</span>
            </div>
        </div>
    )
}


export default Modal;