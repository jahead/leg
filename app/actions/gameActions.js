import { push } from 'react-router-redux'
export const ON_RESTART = 'ON_RESTART'
export const ON_CORRECT_ANSWER = 'ON_CORRECT_ANSWER'
export const ON_INCORRECT_ANSWER = 'ON_INCORRECT_ANSWER'
export const ON_SCORE_INC = 'ON_SCORE_INC'
export const ON_SCORE_RESTART = 'ON_SCORE_RESTART'

export const restart = () => {
    return { type: ON_RESTART, data: {} }
};

export const correct = () => {
    return { type: ON_CORRECT_ANSWER, data: {} }
};

export const incorrect = () => {
    return { type: ON_INCORRECT_ANSWER, data: {} }
}

export const scoreRestart = () => {
    return { type: ON_SCORE_RESTART, data: {} }
};

export const scoreInc = () => {
    return { type: ON_SCORE_INC, data: {} }
}


export default {
    restart: restart,
    correct: correct,
    incorrect: incorrect
}