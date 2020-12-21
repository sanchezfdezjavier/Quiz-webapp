import React from 'react';
import './QuizCard.css';
import ImageNotFound from '../../assets/image_not_found.png';
import { FaCheck } from "react-icons/fa";

export default function QuizCard(props) {
    const quizImgSrc = (props.quiz.attachment !== null) ? props.quiz.attachment.url : ImageNotFound;
    const authorImgSrc = (props.quiz.author !== null) ? props.quiz.author.photo.url: ImageNotFound;
    const authorUsername = (props.quiz.author !== null && props.quiz.author.username !== null) ? props.quiz.author.username : "Anonymous";
    const checkIfCorrect = (quiz)=> {
        if((quiz.userAnswer !== null) && (quiz.userAnswer=== quiz.answer)){
            return <FaCheck classsName="mr-2"/>
        }
    }
    return (
        <div className="slide-in-right">
            <div className="card shadow m-2 w-80 h-80 slide-in-right hu__hu__">
                <img src={ quizImgSrc } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7">
                            <h3 className="card-title text-start display-6"> 
                                { checkIfCorrect(props.quiz) }
                                { props.quiz.question }
                            </h3>
                        </div>
                        <div className="col-5">
                                <div className="col justify-content-end d-inline-block">
                                    Created by { authorUsername }
                                    <img src={ authorImgSrc } className="d-inline-block rounded-circle author-img m-1" alt="..."/>
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
        </div>
    )
}
