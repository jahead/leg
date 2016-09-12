import React from 'react';
import styles from './styles.css';

const Auscrest = () => {
    return (
        <div className={styles['wrap-flexbox']}>
            <img src="/images/Auscrest/Auscrest.png" className={'png ' + styles['inner-flexbox']+ ' ' + styles.auscrest}>
            </img>
        </div>
    );
}

export default Auscrest;