import { push } from 'react-router-redux'

import GameForeword from '../containers/game-foreword';
import CourtRoom from '../containers/court-room';
import AnswerList from '../containers/answer-list';
import QuestionResult from '../containers/question-result';
import GameFinish from '../containers/game-finish';

export default {
    gotoGameForeword: () => push(GameForeword.Path),
    gotoCourtRoom: (id) => push(CourtRoom.BasePath + id),
    gotoAnswerList: (id) => push(AnswerList.BasePath + id),
    gotoQuestionResult: (id) => push(QuestionResult.BasePath + id),
    gotoFinish: (id) => push(GameFinish.Path),
}