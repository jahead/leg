import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import RouterActions from '../../actions/routerActions'

import styles from './styles.css';
import GameData from '../../data/game-data'

import DialogBox from '../../components/dialog-box'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick_getStart: () => dispatch(RouterActions.gotoGameInformationPage())
    }
}

class GameStart extends React.Component {
    static Path = '/leg/start';

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

GameStart = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameStart);

export default GameStart;