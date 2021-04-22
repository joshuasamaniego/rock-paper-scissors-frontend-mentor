import React from 'react';
import styles from './Rules.module.css';

function Rules() {
    const openModal = () => {
        const modal = document.getElementById('modal')
        modal.style.display = "block";
    }
    const closeModal = () => {
        const modal = document.getElementById('modal')
        modal.style.display = "none";
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.button} onClick={openModal}>Rules</div>
            <div id="modal" className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.header}>
                        <h3>Rules</h3>
                        <img id="close" onClick={closeModal} src="/assets/images/icon-close.svg" alt="close icon"/>
                    </div>
                    <img src="/assets/images/ModalRules.png" alt="rules explaining rock, paper, scissors"/>
                </div>
            </div>
        </div>
    )
}

export default Rules
