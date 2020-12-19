import './App.css';

import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import { connect } from 'react-redux';
import { questionAnswer, quiestionAnswer } from './redux/actions'

function App(props) {
  console.log(props.quizzes)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <div className="container">
        <QuizCard quiz={props.quizzes[props.currentQuiz]} 
                  onQuestionAnswer={(answer) => {
                    props.dispatch(questionAnswer(props.currentQuiz, answer))
                  }}
        />
      </div>

    </div>
  );
}

function mapStateToProps(state){
  return {
    ...state
  }
};

export default connect(mapStateToProps)(App);
