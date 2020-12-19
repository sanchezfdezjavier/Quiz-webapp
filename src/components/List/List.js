import React from 'react'

export default function List(props) {
    const quizzes = props.quizzes
    const quizList = quizzes.map((quiz, i) => {
        const active = props.currentQuiz === i;
        return <button className={`list-group-item list-group-item-action ${active ? "active" : ""}`}
                       type="button"
                       aria-current={active}> 
                    {quiz.question} 
                </button>
    })
    return (
        <ul className="list-group">
            { quizList }
        </ul>
    )
}
