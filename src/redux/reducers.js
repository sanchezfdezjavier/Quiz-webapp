import { combineReducers } from 'redux'
import { QUESTIONS_ANSWER, CHANGE_QUIZ, NEXT_QUIZ, PREV_QUIZ, SUBMIT, INIT_QUIZZES, TOGGLE_FINISHED } from './actions';

function score(state = 0, action = {}) {
    console.log("score function triggered")
    switch(action.type) {
        case SUBMIT:
            return action.payload.score
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return action.payload.finished
        case INIT_QUIZZES:
            return action.payload.finished
        default:
            return state;
    }
}

function currentQuiz(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUIZ:
            return action.index
        case NEXT_QUIZ:
            return action.nextIndex
        case PREV_QUIZ:
            return action.prevIndex
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
        case INIT_QUIZZES:
            console.log("reducer quizzes INIT_QUIZZES", action.payload)
            return action.payload.quizzes
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