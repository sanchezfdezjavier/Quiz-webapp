export const QUESTIONS_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUIZ = 'CHANGE_QUIZ';
export const SUBMIT = 'SUBMIT';
export const NEXT_QUIZ = 'NEXT_QUIZ'
export const PREV_QUIZ = 'PREV_QUIZ'

export function questionAnswer(index, answer){
    return { type: QUESTIONS_ANSWER, payload: { index, answer} };
}

export function changeQuiz(index) {
    return { type: CHANGE_QUIZ, index };
}

export function nextQuiz(currentIndex){
    const  nextIndex = (currentIndex < 9) ? currentIndex + 1 : currentIndex;
    return { type: NEXT_QUIZ , nextIndex }
}

export function prevQuiz(currentIndex){
    const  prevIndex = (currentIndex >=  0) ? currentIndex - 1 : currentIndex;
    return { type: NEXT_QUIZ, prevIndex}
}