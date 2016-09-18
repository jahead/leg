import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardText, CardTitle } from 'react-mdl'
import { List, ListItem, ListItemContent} from 'react-mdl'

import GameData from '../../data/game-data';

import styles from './styles.css';

import RouterActions from '../../actions/routerActions';
import GameActions from '../../actions/gameActions';


const mapStateToProps = (state, ownProps) => {
    return {
        courtRoomId: Number.parseInt(ownProps.params.id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickFac: (questionId, optionId, correctId) => () => {
            if (optionId == correctId)
                dispatch({
                    type: 'ON_CORRECT_ANSWER', data: {
                        questionId: questionId,
                        optionId: optionId
                    }
                });
            else
                dispatch({
                    type: 'ON_INCORRECT_ANSWER', data: {
                        questionId: questionId,
                        optionId: optionId
                    }
                });
            dispatch(RouterActions.gotoQuestionResult(Number.parseInt(ownProps.params.id)))
        }
    }
}

class AnswerList extends React.Component {
    static BasePath = '/answerList/';
    static Path = '/answerList/:id';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        const { courtRoomId } = this.props;
        const screneId = GameData.Scene[courtRoomId].id;
        const question = GameData.Questions.filter(ele => ele.scene === screneId)[0];
        const options = question.options.map(option => {
            return (
                <ListItem key= {option.id} className={styles['list-item']} onClick={this.props.onClickFac(question.id, option.id, question.answer) }>
                    <ListItemContent icon="star" >
                        {option.text}
                    </ListItemContent>
                </ListItem>);
        });

        return (
            <div className={styles.view}>
                <div className={styles['wrap-flexbox']}>
                    <Card shadow={0} className={styles['inner-flexbox'] + ' ' + styles['content']}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'black' }}>{question.question}</CardTitle>
                        <CardText style={{ padding: '0', width: '100%' }}>
                            <List className={styles['list']}>
                                {options}
                            </List>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}
AnswerList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerList);

export default AnswerList;