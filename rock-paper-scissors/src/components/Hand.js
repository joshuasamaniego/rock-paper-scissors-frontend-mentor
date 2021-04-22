import React from 'react';
import styles from './Hand.module.css';

function Hand({ value }) {
    return (
        <div className={styles.hand}>
            <img src={`/assets/images/Hand${value}.png`} alt="rock button"/>
        </div>
    )
}

export default Hand
