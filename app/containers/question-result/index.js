import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardText, CardTitle, CardActions } from 'react-mdl'
import { Grid, Cell } from 'react-mdl'
import { Button } from 'react-mdl'


import GameData from '../../data/game-data';

import styles from './styles.css';

import RouterActions from '../../actions/routerActions';

const mapStateToProps = (state, ownProps) => {
    return {
        courtRoomId: Number.parseInt(ownProps.params.id)

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const courtRoomId = Number.parseInt(ownProps.params.id);
    return {
        onClick_nextQuestion: () => 
        {
            if(courtRoomId < GameData.Scene.length - 1 )
                dispatch(RouterActions.gotoCourtRoom(courtRoomId + 1))
            else
                dispatch(RouterActions.gotoFinish())
        }
    }
}

class QuestionResult extends React.Component {
    static BasePath = '/leg/questionResult/';
    static Path = '/leg/questionResult/:id';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        const { courtRoomId } = this.props;
        const screneId = GameData.Scene[courtRoomId].id;
        const question = GameData.Questions.filter(ele => ele.scene === screneId)[0];
        const answer = question.options.filter(ele => ele.id === question.answer)[0];
        const reason = question.reason;

        return (
            <div className={styles.view}>
                <div className={styles['wrap-flexbox']}>
                    <Card shadow={0} className={styles['inner-flexbox'] + ' ' + styles['content']}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'black' }}>{question.question}</CardTitle>
                        <CardText >
                            <Grid>
                                <Cell col={12}>
                                    {answer.text}
                                </Cell>
                            </Grid>
                            <Grid>
                                <Cell col={12}>
                                    {reason}
                                </Cell>
                            </Grid>
                        </CardText>
                        <CardActions>
                            <Button colored style={{float:'right'}} onClick={this.props.onClick_nextQuestion}>Next</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

QuestionResult = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionResult);

export default QuestionResult;