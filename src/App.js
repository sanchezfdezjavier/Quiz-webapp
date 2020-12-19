import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import { connect } from 'react-redux';

function App(props) {
  console.log(props.quizzes)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <div className="container">
        <QuizCard/>
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
