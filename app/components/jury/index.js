import React from 'react';
import styles from './styles.css';

const Judge = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/leg/images/Jury/Jury.png" className={'png ' + styles['inner-flexbox']+ ' ' + styles.jury}>
            </img>
        </div>
    );
}

export default Judge;