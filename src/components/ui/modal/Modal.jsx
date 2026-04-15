import React from "react";
import styles from "./styles.module.css";

const Modal = ({ isOpen, children }) => {

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverly}>
            {children}
        </div>
    )
}

export default Modal
