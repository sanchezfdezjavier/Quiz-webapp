export const QUESTIONS_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUIZ = 'CHANGE_QUIZ';
export const SUBMIT = 'SUBMIT';

export function questionAnswer(index, answer){
    return { type: QUESTIONS_ANSWER, payload: { index, answer} };
}

export function changeQuiz(index) {
    return { type: CHANGE_QUIZ, index };
}