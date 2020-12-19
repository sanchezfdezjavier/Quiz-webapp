import './App.css';

import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import List from './components/List/List';
import { connect } from 'react-redux';
import { questionAnswer, changeQuiz } from './redux/actions'

function App(props) {
  console.log("props <- state", props)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p className="rounded bg-light">DEBUG current quiz: { props.currentQuiz }</p>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <List quizzes={ props.quizzes } 
                  currentQuiz={ props.currentQuiz } 
                  onChangeQuiz={(i) => {
                    props.dispatch(changeQuiz(i))
                  }}/>
          </div>
          <div className="col-md-8">
            <QuizCard quiz={ props.quizzes[props.currentQuiz] } 
                      onQuestionAnswer={(answer) => {
                        props.dispatch(questionAnswer(props.currentQuiz, answer))
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
