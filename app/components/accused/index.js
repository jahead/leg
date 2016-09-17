import React from 'react';
import styles from './styles.css';

const Accused = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/leg/images/Accused/Accused.png" className={'png ' + styles['inner-flexbox']+ ' ' + styles.accused}>
            </img>
        </div>
    );
}

export default Accused;