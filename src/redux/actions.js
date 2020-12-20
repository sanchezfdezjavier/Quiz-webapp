import axios from 'axios'
import { QUIZZES_URL, TEST_URL } from '../constants';

export const QUESTIONS_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUIZ = 'CHANGE_QUIZ';
export const SUBMIT = 'SUBMIT';
export const NEXT_QUIZ = 'NEXT_QUIZ'
export const PREV_QUIZ = 'PREV_QUIZ'
export const INIT_QUIZZES = 'INIT_QUIZZES'

export function questionAnswer(index, answer){
    return { type: QUESTIONS_ANSWER, payload: { index, answer} };
}

export function changeQuiz(index) {
    return { type: CHANGE_QUIZ, index };
}

export function nextQuiz(currentIndex){
    const  nextIndex = currentIndex + 1;
    return { type: NEXT_QUIZ , nextIndex }
}

export function prevQuiz(currentIndex){
    const  prevIndex = currentIndex - 1;
    return { type: PREV_QUIZ, prevIndex }
}

export function submit(quizzes){
    let newScore = 0;
    quizzes.forEach(quiz => {
        if (typeof quiz.userAnswer !== 'undefined') {
            if(quiz.answer.toLowerCase() === quiz.userAnswer.toLowerCase()){
                newScore += 1;
            }
          }
    });
    console.log("submit newScore", newScore)
    return { type: SUBMIT, payload: {score: newScore, finished: true} }
}

export function initQuizzes(url){
    return (dispatch) => {
        axios.get(url)
        .then(res => {
        console.log("get request", res.data.nextUrl)
        const quizzes = res.data.quizzes
        const nextUrl = res.data.nextUrl
        dispatch(fetchQuizzesSuccess(quizzes, nextUrl))
        })
        .catch(error => {
            const errorMsg = error.message
            console.log(errorMsg)
        })
    }
}

export function fetchQuizzesSuccess(quizzes, nextUrl){
    return { type: INIT_QUIZZES, payload: { quizzes, nextUrl } }
}