import React from 'react';
import styles from './styles.css';

const Lawyers = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/images/Lawyers/Lawyers.png" className={'png ' + styles['inner-flexbox']+ ' ' + styles.lawyers}>
            </img>
        </div>
    );
}

export default Lawyers;