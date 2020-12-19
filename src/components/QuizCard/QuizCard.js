import React from 'react'

export default function QuizCard(props) {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> 
                    {props.quiz.question}
                </h5>
                <input className="form-control" type="text" 
                       value={ props.quiz.userAnswer || ''} 
                       onChange={(e) => props.onQuestionAnswer(e.target.value)}
                />
            </div>
        </div>
    )
}
