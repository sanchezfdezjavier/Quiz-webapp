import './App.css';

import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import List from './components/List/List';
import { connect } from 'react-redux';
import { questionAnswer } from './redux/actions'

function App(props) {
  console.log(props.quizzes)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <List quizzes={ props.quizzes } currentQuiz={ props.currentQuiz }/>
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

function mapStateToProps(state){
  return {
    ...state
  }
};

export default connect(mapStateToProps)(App);
