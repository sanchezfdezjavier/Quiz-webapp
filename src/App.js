import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import List from './components/List/List';
import { connect } from 'react-redux';
import { questionAnswer, changeQuiz, nextQuiz, prevQuiz, submit, initQuizzes } from './redux/actions'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(initQuizzes())
  }
  render() {
    console.log(this.props)
    if(this.props.loading === true){
      <h1 className="text-center display-3 m-4"> Loading... </h1>
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar/>
          </header>
    
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <List quizzes={ this.props.quizzes } 
                      currentQuiz={ this.props.currentQuiz } 
                      onChangeQuiz={(i) => {
                        this.props.dispatch(changeQuiz(i))
                      }}/>
                <div className="bg-light rounded m-5 p-1 shadow-sm">
                      <p>Score  {this.props.score}</p>
                      <p> Finished { this.props.finished }</p>
                      <button className="btn btn-success" 
                              onClick={ ()=>{ this.props.dispatch(submit(this.props.quizzes))} }>
                              Submit
                      </button>
                      <button className="btn btn-primary m-2" 
                              onClick={()=>{ this.props.dispatch(initQuizzes(this.props.nextUrl))}}>
                              { this.props.nextUrl }
                      </button>
                </div>
              </div>
              <div className="col-md-7">
                <QuizCard quiz={ this.props.quizzes[this.props.currentQuiz] }
                          currentQuiz={ this.props.currentQuiz }
                          onQuestionAnswer={(answer) => {
                            this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
                          }}
                          onNextQuiz={()=>{
                            this.props.dispatch(nextQuiz(this.props.currentQuiz))
                          }}
                          onPrevQuiz={()=>{
                            this.props.dispatch(prevQuiz(this.props.currentQuiz))
                          }}
                />
              </div>
            </div>
          </div>
    
        </div>
      );
    }
    }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
