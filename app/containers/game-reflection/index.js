import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import RouterActions from '../../actions/routerActions';

import styles from './styles.css';
import GameData from '../../data/game-data'
import DialogBox from '../../components/dialog-box'
import courtRoom from '../court-room'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick_next: () => {
            dispatch(RouterActions.gotoCourtRoom(0))
        }
    }
}

class GameReflection extends React.Component {
    static Path = '/reflection';

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
                <div className={styles['wrap-auscrest']}>
                    <img src="/images/Auscrest/Auscrest.png" className={'png ' + styles['inner-auscrest'] + ' ' + styles.auscrest}>
                    </img>
                </div>
                <DialogBox title={'Reflection'} nextOnClick={this.props.onClick_next} nextText={'Restart'} className={styles.reflection}>
                    <ReactMarkdown source={GameData.GeneralText.Reflection} className={styles.quote}/>
                </DialogBox>
            </div>
        );
    }
}

GameReflection = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameReflection);

export default GameReflection;