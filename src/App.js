import './App.css';

import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import List from './components/List/List';
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { questionAnswer, changeQuiz, nextQuiz, prevQuiz, submit, initQuizzes } from './redux/actions'

function App(props) {
  console.log("props <- state", props)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <List quizzes={ props.quizzes } 
                  currentQuiz={ props.currentQuiz } 
                  onChangeQuiz={(i) => {
                    props.dispatch(changeQuiz(i))
                  }}/>
            <div className="bg-light rounded m-5 p-1 shadow-sm">
                  <p>Score  {props.score}</p>
                  <p> Finished { props.finished }</p>
                  <button className="btn btn-success" 
                          onClick={ ()=>{ props.dispatch(submit(props.quizzes))} }>
                          Submit
                  </button>
                  <button className="btn btn-primary m-2" 
                          onClick={()=>{ props.dispatch(initQuizzes())}}>
                          Load more quizzes
                  </button>
            </div>
          </div>
          <div className="col-md-8">
            <QuizCard quiz={ props.quizzes[props.currentQuiz] }
                      currentQuiz={ props.currentQuiz }
                      onQuestionAnswer={(answer) => {
                        props.dispatch(questionAnswer(props.currentQuiz, answer))
                      }}
                      onNextQuiz={()=>{
                        props.dispatch(nextQuiz(props.currentQuiz))
                      }}
                      onPrevQuiz={()=>{
                        props.dispatch(prevQuiz(props.currentQuiz))
                      }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
