import React from 'react'
import './QuizCard.css'

export default function QuizCard(props) {
    return (
        <div className="card shadow m-5">
            <img src={ props.quiz.attachment.url } className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h3 className="card-title text-start"> 
                            { props.quiz.question }
                        </h3>
                    </div>
                    <div className="col">
                        <div className="row">
                        <div className="col">
                            <p>{props.quiz.author.username}</p>
                        </div>
                        <div className="col">
                            <img src={ props.quiz.author.photo.url } className="rounded-circle author-img" alt="..."/>
                        </div>
                        </div>
                    </div>
                </div>
                
                <input className="form-control" type="text" 
                       value={ props.quiz.userAnswer || ''} 
                       onChange={ (e) => props.onQuestionAnswer(e.target.value) }
                       placeholder="Your Answer"
                />
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-md-8">
                            <button className="btn btn-light">Prev</button>
                            <button className="btn btn-light ms-2" onClick={ props.onNextQuiz }>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
