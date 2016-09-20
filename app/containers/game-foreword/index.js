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

class GameForeword extends React.Component {
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
                <DialogBox title={'Welcome'} heightTitle={'176px'} nextOnClick={this.props.onClick_next} nextText={'Next'} className={styles.foreword}>
                    <ReactMarkdown source={GameData.GeneralText.Forward.Quote} className={styles.quote}/>
                    <ReactMarkdown source={GameData.GeneralText.Forward.QuoteRef} className={styles.quoteRef}/>
                    <ReactMarkdown source={GameData.GeneralText.Forward.Text} className={styles.text} />
                </DialogBox>
            </div>
        );
    }
}

GameForeword = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameForeword);

export default GameForeword;