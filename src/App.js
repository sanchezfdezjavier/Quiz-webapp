import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Spinner from './components/Spinner/Spinner'
import QuizCard from './components/QuizCard/QuizCard'
import List from './components/List/List';
import { connect } from 'react-redux';
import { questionAnswer, changeQuiz, nextQuiz, prevQuiz, submit, initQuizzes, toggleFinished } from './redux/actions'
import { QUIZZES_URL } from './constants';
import { FaCheck } from "react-icons/fa";
class App extends Component {
  componentDidMount(){
    console.log("triggered")
    this.props.dispatch(initQuizzes(QUIZZES_URL))
  }

  onEnterPress = (e) => {
    console.log("event triggered")
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.props.dispatch(submit(this.props.quizzes))
      if(this.props.currentQuiz < 9){
        this.props.dispatch(nextQuiz(this.props.currentQuiz))
      }
    }
  }

  render() {
    console.log(this.props)
    if(!this.props.finished){
      return (
        <div className="App loading">
            <Spinner/>
        </div>
      )
    } else {
      return (
        <div className="App" onKeyDown={ this.onEnterPress }>
          <header className="App-header slide-in-top">
            <Navbar/>
          </header>
    
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-md-5 slide-in-left">
                  <List quizzes={ this.props.quizzes } 
                        currentQuiz={ this.props.currentQuiz } 
                        onChangeQuiz={(i) => {
                          this.props.dispatch(changeQuiz(i))
                        }}
                        />
                  <div className="row">
                        <div className="col-8 text-start m-2">
                          <div className="rounded-lg">
                              <button type="submit"
                                      className="btn btn-lg btn-success shadow-sm m-1" 
                                      onClick={ ()=>{ this.props.dispatch(submit(this.props.quizzes))} }
                                      >
                                      Submit
                              </button>
                              <button className="btn btn-lg btn-primary m-1 shadow-sm" 
                                      onClick={()=>{ this.props.dispatch(initQuizzes(QUIZZES_URL))}}>
                                      Load more quizzes
                              </button>
                          </div>
                        </div>
                        <div className="col m-1 score text-start align-content-center">
                          <div className="">
                              <FaCheck width="5"/> {this.props.score}
                          </div>
                        </div>
                  </div>
              </div>

              <div className="col-md-7">
                <QuizCard quiz={ this.props.quizzes[this.props.currentQuiz] }
                          currentQuiz={ this.props.currentQuiz }
                          numberOfQuizzes={ this.props.quizzes.length }
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
