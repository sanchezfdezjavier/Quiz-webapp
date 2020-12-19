import { combineReducers } from 'redux'

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
        default:
            return state;
    }
}

function quizzes(state = [], action = {}) {
    switch(action.type) {
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