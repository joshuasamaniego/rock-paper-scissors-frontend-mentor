import React from 'react';
import styles from './Hands.module.css';
import Hand from './Hand';

function Hands() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.triangle}>
                <img src="/assets/images/bg-triangle.svg" alt="faint triangle"/>
            </div>
            <div className={styles.handsTop}>
                <Hand value="Paper"/>
                <Hand value="Scissors"/>
            </div>
            <div className={styles.handsBottom}>
                <Hand value="Rock"/>
            </div>
        </div>
    )
}

export default Hands
