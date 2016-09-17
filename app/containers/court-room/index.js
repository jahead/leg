import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-mdl'
import { Card, CardText, CardTitle } from 'react-mdl'

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
        onClick_next: () => dispatch(RouterActions.gotoAnswerList(courtRoomId))
    }
}

class CourtRoom extends React.Component {
    static BasePath = '/leg/courtRoom/';
    static Path = '/leg/courtRoom/:id';

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
                <div className={styles.facts}>
                    <Card style={{ width: '100%' }}>
                        <CardText>
                            facts: {screneInformation.facts[0]}
                        </CardText>
                    </Card>
                </div>
                <div className={styles.title}>
                    <Card style={{ width: '100%' }}>
                        <CardTitle>
                        Case: {screneInformation.title}
                        </CardTitle>
                    </Card>
                </div>
                <div className={styles.witness}>
                    <Card style={{ width: '100%' }}>
                        <CardText>
                        Witness: {screneInformation.witness}                            
                        </CardText>
                    </Card>
                </div>
                <Judge/>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ width: '50%', float: 'left' }}>
                        <Jury/>
                    </div>
                    <div style={{ width: '50%', float: 'right' }}>
                        <Accused/>
                    </div>
                </div>
                <Lawyers/>
                <Button className={styles['next-button']} onClick={this.props.onClick_next} colored>{'next'}</Button>
            </div >
        );
    }
}

CourtRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourtRoom);

export default CourtRoom;