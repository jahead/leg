import { Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl'
import React, { PropTypes } from 'react';

import styles from './styles.css';

const DialogBox = (props) => {
    return (
        <div className={styles['wrap-flexbox']}>
            <Card shadow={0} className={styles['inner-flexbox'] + ' ' + styles['content']}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'black' }}>Welcome</CardTitle>
                <CardText style={{ height: '100%', 'overflow':'scroll' }}>
                    {props.children}
                </CardText>
                <CardActions border className={styles.actions}>
                    <Button onClick={props.nextOnClick} colored>{props.nextText}</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default DialogBox;