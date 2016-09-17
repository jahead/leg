import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import RouterActions from '../../actions/routerActions';

import styles from './styles.css';
import GameData from '../../data/game-data'
import DialogBox from '../../components/dialog-box'
import gameForeword from '../game-foreword'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick_getStart: () => dispatch(RouterActions.gotoGameForeword())
    }
}

class GameInformation extends React.Component {
    static Path = '/information';

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
                <DialogBox nextOnClick={this.props.onClick_getStart} nextText={'Get Started'}>
                    <ReactMarkdown source={GameData.GeneralText.Intro}/>
                    {GameData.GeneralText.Categories.map((item, index) => <ReactMarkdown key={index} source={ item }/>) }
                </DialogBox>
            </div>
        );
    }
}

GameInformation = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameInformation);

export default GameInformation;