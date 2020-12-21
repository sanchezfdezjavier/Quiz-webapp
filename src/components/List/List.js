import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function List(props) {
    const quizzes = props.quizzes
    // Never shows the check
    const checkIfCorrect = (quiz)=> {
        if((quiz.userAnswer !== null) && (quiz.userAnswer=== quiz.answer)){
            return <FaCheck/>
        }
    }
    const quizList = quizzes.map((quiz, i) => {
        const active = props.currentQuiz === i;
        return <button className={ `list-group-item list-group-item-action ${active ? "active" : ""} text-start` }
                       type="button"
                       aria-current={ active }
                       onClick={ () => props.onChangeQuiz(i) }
                       key={ i }
                       > 
                     { quiz.question }
                     { checkIfCorrect(quiz) }
                </button>
    })
    return (
        <ul className="list-group shadow m-2">
            { quizList }
        </ul>
    )
}
