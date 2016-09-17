import React from 'react';
import styles from './styles.css';

const Judge = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/leg/images/Judge/Judge.png" className={'png ' + styles['inner-flexbox']+ ' ' +  styles.judge}>
            </img>
        </div>
    );
}

export default Judge;