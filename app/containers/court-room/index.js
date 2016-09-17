import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-mdl'

import styles from './styles.css';

import RouterActions from '../../actions/routerActions';

import Accused from '../../components/accused';
import Auscrest from '../../components/auscrest';
import Judge from '../../components/judge';
import Jury from '../../components/jury';
import Lawyers from '../../components/lawyers';
import AnswerList from '../answer-list';

import GameData from '../../data/game-data';

const mapStateToProps = (state, ownProps) => {
    return {
        courtRoomId: Number.parseInt(ownProps.params.id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const courtRoomId = Number.parseInt(ownProps.params.id);
    return {
        onClick_next: () =>  dispatch(RouterActions.gotoAnswerList(courtRoomId))
    }
}

class CourtRoom extends React.Component {
    static BasePath = '/courtRoom/';
    static Path = '/courtRoom/:id';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        const { courtRoomId } = this.props;
        const screneInformation = GameData.Scene[courtRoomId];
        return (
            <div className={styles.view}>
                <Auscrest/>
                <Judge/>
                <div>
                    <Jury/>
                    <Accused/>
                </div>
                <Lawyers/>
                <Button className={styles['next-button']} onClick={this.props.onClick_next} colored>{'next'}</Button>
            </div>
        );
    }
}

CourtRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourtRoom);

export default CourtRoom;