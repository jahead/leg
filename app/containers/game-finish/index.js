import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardText, CardTitle, CardActions } from 'react-mdl'
import { Grid, Cell } from 'react-mdl'
import { Button } from 'react-mdl'


import GameData from '../../data/game-data';

import styles from './styles.css';

import RouterActions from '../../actions/routerActions';
import GameActions from '../../actions/gameActions';

const mapStateToProps = (state, ownProps) => {
    const {game} = state;
    return {
        game: game

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const courtRoomId = Number.parseInt(ownProps.params.id);
    return {
        onClick_reflection: () => {
            dispatch(GameActions.restart())
            dispatch(RouterActions.gotoGameReflection())
        }
    }
}

class GameFinish extends React.Component {
    static BasePath = '/gameFinish/';
    static Path = '/gameFinish/';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        const { game } = this.props;
        const nQuestions = GameData.Questions.length;
        return (
            <div className={styles.view}>
                <div className={styles['wrap-flexbox']}>
                    <Card shadow={0} className={styles['inner-flexbox'] + ' ' + styles['content']}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'black' }}></CardTitle>
                        <CardText >
                            <Grid>
                                <Cell col={12} style={{'text-align':'center',}}>
                                    You have finished the game, thank you for playing!
                                </Cell>
                            </Grid>
                            <Grid>
                                <Cell col={12} style={{'text-align':'center'}}>
                                    <span className={styles.scoreFont}>
                                        <h3 style={{'font-weight': '600'}}> Your Score </h3>
                                    </span>
                                    <span>
                                        <h1> {game.score}/{nQuestions} </h1>
                                    </span>
                                </Cell>
                            </Grid>
                        </CardText>
                        <CardActions>
                            <Button colored style={{ float: 'right' }} onClick={this.props.onClick_reflection}>Go to Reflection</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

GameFinish = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameFinish);

export default GameFinish;