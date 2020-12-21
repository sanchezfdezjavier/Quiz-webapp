import React from 'react'

export default function List(props) {
    const quizzes = props.quizzes
    const quizList = quizzes.map((quiz, i) => {
        const active = props.currentQuiz === i;
        return <button className={ `list-group-item list-group-item-action ${active ? "active" : ""} text-start` }
                       type="button"
                       aria-current={ active }
                       onClick={ () => props.onChangeQuiz(i) }
                       key={ i }
                       > 
                     {i + 1}. { quiz.question } 
                </button>
    })
    return (
        <ul className="list-group shadow m-2">
            { quizList }
        </ul>
    )
}
