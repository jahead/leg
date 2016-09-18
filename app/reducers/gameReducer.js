import { combineReducers } from 'redux';

// import GameActions from '../actions/gameActions';
import * as GameActions from '../actions/gameActions';

const GameScore = (state = 0, action) => {
    switch (action.type) {
        case GameActions.ON_SCORE_INC:
            return state + 1;
        case GameActions.ON_SCORE_RESTART:
            return 0;
        default:
            return state;
    }
}

const GameManager = (state = { correct: false, score: 0 }, action) => {

    switch (action.type) {
        case GameActions.ON_CORRECT_ANSWER:
            return { correct: true, score: GameScore(state.score, GameActions.scoreInc()) };
        case GameActions.ON_INCORRECT_ANSWER:
            return { correct: false, score: GameScore(state.score, GameActions.scoreInc()) };
        case GameActions.ON_RESTART:
            return GameScore(state, GameActions.scoreRestart());
        default:
            return state;
    }
}

export default GameManager