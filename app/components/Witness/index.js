import React from 'react';
import styles from './styles.css';

const Witness = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/images/Witness/Witness.png" className={'png ' + styles['inner-flexbox']+ ' ' + styles.witness}>
            </img>
        </div>
    );
}

export default Witness;