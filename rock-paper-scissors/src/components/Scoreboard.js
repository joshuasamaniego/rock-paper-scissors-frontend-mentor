import React from 'react'
import styles from './Scoreboard.module.css';

function Scoreboard() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>rock<br/>paper<br/>scissors</h1> 
            <section className={styles.boxScoreContainer}>
                <h3 className={styles.scoreTitle}>score</h3>
                <div className={styles.score}>0</div>
            </section>
        </div>
    )
}

export default Scoreboard;
