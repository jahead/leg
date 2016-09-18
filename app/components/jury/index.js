import React from 'react';
import styles from './styles.css';

const Jury = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/images/Jury/Jury.png" className={'png ' + styles['inner-flexbox']+ ' ' + styles.jury}>
            </img>
        </div>
    );
}

export default Jury;