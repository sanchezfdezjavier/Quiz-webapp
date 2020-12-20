import React from 'react'
import './QuizCard.css'

export default function QuizCard(props) {
    return (
        <div className="card shadow m-2">
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
                            <p>Created by { props.quiz.author.username }</p>
                        </div>
                        <div className="col">
                            <img src={ props.quiz.author.photo.url } className="rounded-circle author-img mb-2" alt="..."/>
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
                            {console.log("current quiz", props.currentQuiz)}
                            <button className={`btn btn-outline-dark ${!(props.currentQuiz > 0) ? "disabled" : "" }`} onClick={ props.onPrevQuiz }>Prev</button>
                            <button className={`btn btn-outline-dark ms-2 ${!(props.currentQuiz < 9) ? "disabled" : "" }`} onClick={ props.onNextQuiz }>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
