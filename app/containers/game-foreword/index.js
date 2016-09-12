import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './styles.css';
import GameData from '../../data/game-data'
import {browserHistory} from 'react-router';
import DialogBox from '../../components/dialog-box'
import courtRoom from '../court-room'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick_next: () => browserHistory.push('courtRoom/1')
    }
}

class GameStart extends React.Component {
    static Path = '/foreword';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className={styles['wrap-flexbox']}>
                <DialogBox nextOnClick={this.props.onClick_next} nextText={'Next'}>
                    <ReactMarkdown source={GameData.GeneralText.Forward}/>
                </DialogBox>
            </div>
        );
    }
}

GameStart = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameStart);

export default GameStart;