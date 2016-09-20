import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-mdl'
import { Card, CardText, CardTitle } from 'react-mdl'
import { Grid, Cell } from 'react-mdl'
import ReactMarkdown from 'react-markdown';

import styles from './styles.css';

import RouterActions from '../../actions/routerActions';

import Accused from '../../components/accused';
import Auscrest from '../../components/auscrest';
import Judge from '../../components/judge';
import Jury from '../../components/jury';
import Lawyers from '../../components/lawyers';
import Witness from '../../components/witness';

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
    static BasePath = '/courtRoom/';
    static Path = '/courtRoom/:id';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
        this.state = {
            lawyer: (<div/>)
        }
    }

    componentWillMount() {
    }

    render() {
        const { courtRoomId } = this.props;
        const screneInformation = GameData.Scene[courtRoomId];

        let event = null;
        if (screneInformation.event.length > 0) {
            event = (
                <div className={styles.event}>
                    <Card style={{ width: '100%' }}>
                        <CardTitle>
                            Evidence in Issue 
                        </CardTitle>
                        <CardText>
                            {screneInformation.event}
                        </CardText>
                    </Card>
                </div>);
        }


        let witness = null;
        if (screneInformation.witness.length > 0) {
            witness = (
                <div className={styles.witness}>
                    <Card style={{ width: '100%', 'min-height': '0px' }}>
                        <CardTitle  style={{ margin: 0, width: '100%', padding: 0 }}>
                            <Grid style={{ margin: 0, width: '100%', padding: 0 }}>
                                <Cell col={4} style={{ 'background-color': '#9E9E9E', margin: 0, padding: '5px 5px 5px 10px', 'min-width': '145px' }}>
                                    <h3>
                                        Witness
                                    </h3>
                                </Cell>
                                <Cell col={8} className={styles.witText } style={{ margin: 0, padding: '5px' }}>
                                    <ReactMarkdown source={ screneInformation.witness}/>
                                </Cell>
                            </Grid>
                        </CardTitle>
                    </Card>
                </div>)
        }

        let title = (
            <div className={styles.title}>
                <Card style={{ width: '100%', 'min-height': '0px' }}>
                    <CardTitle  style={{ margin: 0, width: '100%', padding: 0 }}>
                        <Grid style={{ margin: 0, width: '100%', padding: 0 }}>
                            <Cell col={3} style={{ 'background-color': '#9E9E9E', margin: 0, padding: '5px 5px 5px 10px', 'min-width': '95px' }}>
                                <h3>
                                    Case
                                </h3>
                            </Cell>
                            <Cell col={9} style={{ margin: 0, padding: '5px' }}>
                                <h3>
                                    {screneInformation.title}
                                </h3>
                            </Cell>
                        </Grid>
                    </CardTitle>
                </Card>
            </div>);


        let { lawyer }  = this.state;
        if (screneInformation.lawyer.length > 0) {
            setTimeout(() => {
                this.setState({
                    lawyer: (
                        <div className={styles.lawyer + ' ' + styles.animated + ' ' + styles.bounceIn}>
                            <Card shadow={1} style={{ width: '100%', 'min-height': '0px' }} className={styles['lawyer-card']}>
                                <CardText>
                                    {screneInformation.lawyer}
                                </CardText>
                            </Card>
                        </div>)
                })
            }, 300)
        }

        let fact = (
            <div className={styles.facts}>
                <Card style={{ width: '100%', 'min-height': '0px' }}>
                    <CardTitle  style={{ margin: 0, width: '100%', padding: 0 }}>
                        <Grid style={{ margin: 0, width: '100%', padding: 0 }}>
                            <Cell col={3} style={{ 'background-color': '#9E9E9E', margin: 0, padding: '5px 5px 5px 10px', 'min-width': '95px' }}>
                                <h3>
                                    Facts
                                </h3>
                            </Cell>
                            <Cell col={9} className={styles.factsText} style={{ margin: 0, padding: '5px' }}>
                                <ReactMarkdown source={ '' + screneInformation.facts[0]}/>
                            </Cell>
                        </Grid>
                    </CardTitle>
                </Card>
            </div>);

        return (
            <div className={styles.view}>
                <Auscrest/>
                {event}
                {witness}
                {title}
                {fact}
                {lawyer}
                <Judge/>
                <Witness/>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ width: '50%', float: 'left', height: '100%' }}>
                        <Jury/>
                    </div>
                    <div style={{ width: '50%', float: 'right', height: '100%' }}>
                        <Accused/>
                    </div>
                </div>
                <Lawyers/>
                <div className={styles['next-button-wrapper']}>
                    <Button className={styles['next-button']} onClick={this.props.onClick_next} raised ripple accent>Go to Question</Button>
                </div>
            </div >
        );
    }
}

CourtRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourtRoom);

export default CourtRoom;