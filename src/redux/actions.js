export const QUESTIONS_ANSWER = 'QUESTION_ANSWER';

export function questionAnswer(index, answer){
    return { type: QUESTIONS_ANSWER, payload: { index, answer} };
}