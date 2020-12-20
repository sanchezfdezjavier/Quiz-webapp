import React from 'react'
import './QuizCard.css'

export default function QuizCard(props) {
    return (
        <div className="card shadow m-2 w-80 h-80">
            <img src={ props.quiz.attachment.url } className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h3 className="card-title text-start display-6"> 
                            { props.quiz.question }
                        </h3>
                    </div>
                    <div className="col-4">
                            <div className="col justify-content-end">
                                Created by { props.quiz.author.userName }
                                <img src={ props.quiz.author.photo.url } className="d-inline-block rounded-circle author-img m-1" alt="..."/>
                            </div>
                    </div>
                </div>
                
                <input className="form-control" type="text" 
                       value={ props.quiz.userAnswer || ''} 
                       onChange={ (e) => props.onQuestionAnswer(e.target.value) }
                       placeholder="Your Answer"
                />
                <div className="container mt-2 justify-content-start">
                    <button className={`btn btn-outline-secondary ${!(props.currentQuiz > 0) ? "disabled" : "" }`} onClick={ props.onPrevQuiz }>Prev</button>
                    <button className={`btn btn-outline-secondary ms-2  ${!(props.currentQuiz < 9) ? "disabled" : "" }`} onClick={ props.onNextQuiz }>Next</button>
                </div>
            </div>
        </div>
    )
}
