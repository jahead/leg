import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardText, CardTitle, CardActions } from 'react-mdl'
import { Grid, Cell } from 'react-mdl'
import { List, ListItem, ListItemContent } from 'react-mdl'
import { Button } from 'react-mdl'

import ReactMarkdown from 'react-markdown';


import GameData from '../../data/game-data';

import styles from './styles.css';

import RouterActions from '../../actions/routerActions';

const mapStateToProps = (state, ownProps) => {
    const { game } = state;
    return {
        courtRoomId: Number.parseInt(ownProps.params.id),
        correct: game.correct
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
    static BasePath = '/questionResult/';
    static Path = '/questionResult/:id';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        const { courtRoomId, correct } = this.props;
        const screneId = GameData.Scene[courtRoomId].id;
        const question = GameData.Questions.filter(ele => ele.scene === screneId)[0];
        const answer = question.options.filter(ele => ele.id === question.answer)[0];
        const reason = question.reason;
        let answerHtml = null;
        if(correct) {
            answerHtml = (
                <Grid style={{'background-color':'#4CAF50','padding-bottom':0, display:'block'}}>
                    <List style={{ 'margin-bottom': 0, 'padding-bottom': 0}}>            
                        <ListItem threeLine >
                            <ListItemContent subtitle={answer.text} icon="check" >
                                Correct!
                            </ListItemContent>
                        </ListItem>
                    </List>
                </Grid>);
        }
        else {
            answerHtml = (
                <Grid style={{'background-color':'#FF3D00', 'padding-bottom':0, display:'block'}}>
                    <List style={{ 'margin-bottom': 0, 'padding-bottom': 0}}>                
                        <ListItem threeLine>
                            <ListItemContent subtitle={answer.text} icon="close" >
                                Incorrect, the answer was:
                            </ListItemContent>
                        </ListItem>
                    </List>
                </Grid>);
        }

        return (
            <div className={styles.view}>
                <div className={styles['wrap-flexbox']}>
                    <Card shadow={0} className={styles['inner-flexbox'] + ' ' + styles['content']}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'black' }}>{question.question}</CardTitle>
                        <CardText>
                            {answerHtml}
                            <Grid>
                                <Cell col={12}>
                                    <ReactMarkdown source={reason}/>
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