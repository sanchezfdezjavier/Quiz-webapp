import { combineReducers } from 'redux'
import { QUESTIONS_ANSWER, CHANGE_QUIZ } from './actions';

function score(state = 0, action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function currentQuiz(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUIZ:
            return action.index
        default:
            return state;
    }
}

function quizzes(state = [], action = {}) {
    switch(action.type) {
        case QUESTIONS_ANSWER:
            return state.map((quiz, i)=>{
                return {
                    ...quiz,
                    userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer    
                } 
            })
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished, 
    currentQuiz,
    quizzes
}));

export default GlobalState;