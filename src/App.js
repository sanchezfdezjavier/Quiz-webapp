import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import QuizCard from './components/QuizCard/QuizCard'
import List from './components/List/List';
import Footer from './components/Footer/Footer'
import { connect } from 'react-redux';
import { questionAnswer, changeQuiz, nextQuiz, prevQuiz, submit, initQuizzes } from './redux/actions'
import { QUIZZES_URL } from './constants';
import { FaCheck } from "react-icons/fa";
class App extends Component {
  componentDidMount(){
    this.props.dispatch(initQuizzes())
  }

  onEnterPress = (e) => {
    console.log("event triggered")
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.myFormRef.submit();
    }
  }

  render() {
    console.log(this.props)
    if(this.props.quizzes.length === 0){
      return (
        <div className="App">
          <header className="App-header slide-in-top" key={ Math.floor(Math.random() * 10) }>
              <Navbar/>
            </header>
          <div className="container justify-content-center">
            <div className="row">
            <h1 className="text-center display-2 m-4"> No quizzes load </h1>
            <button className="btn btn-lg btn-primary text-center" 
                    onClick={()=>{ this.props.dispatch(initQuizzes(QUIZZES_URL))}}>
                    Go to the first page!
            </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header slide-in-top">
            <Navbar/>
          </header>
    
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-5">
                  <List quizzes={ this.props.quizzes } 
                        currentQuiz={ this.props.currentQuiz } 
                        onChangeQuiz={(i) => {
                          this.props.dispatch(changeQuiz(i))
                        }}
                        />
                  <div className="row">
                        <div className="col-8 text-start m-2">
                          <div className="rounded-lg" onKeyDown={ this.onEnterPress }>
                              <button type="submit"
                                      className="btn btn-lg btn-success shadow-sm" 
                                      onClick={ ()=>{ this.props.dispatch(submit(this.props.quizzes))} }
                                      >
                                      Submit
                              </button>
                              <button className="btn btn-lg btn-primary ms-3 shadow-sm" 
                                      onClick={()=>{ this.props.dispatch(initQuizzes(QUIZZES_URL))}}>
                                      Load more quizzes
                              </button>
                          </div>
                        </div>
                        <div className="col text-center m-1">
                          <p className="score display-6"><FaCheck/> {this.props.score}</p>
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
