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
    if(this.props.quizzes.length === 0){
      return (
        <div className="container justify-content-center">
          <div className="row">
          <h1 className="text-center display-1 m-4"> Press to load quizzes </h1>
          <button className="btn btn-lg btn-primary text-center" 
                  onClick={()=>{ this.props.dispatch(initQuizzes(this.props.nextUrl))}}>
                  Go to the first page!
          </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar/>
          </header>
    
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-5">
                  <List quizzes={ this.props.quizzes } 
                        currentQuiz={ this.props.currentQuiz } 
                        onChangeQuiz={(i) => {
                          this.props.dispatch(changeQuiz(i))
                        }}/>
                  <div className="row">
                        <div className="col-8">
                          <div className="btn-group bg-white rounded-lg shadow-sm">
                              <button type="submit"
                                      className="btn btn-lg btn-success" 
                                      onClick={ ()=>{ this.props.dispatch(submit(this.props.quizzes))} }>
                                      Submit
                              </button>
                              <button className="btn btn-lg btn-primary" 
                                      onClick={()=>{ this.props.dispatch(initQuizzes(this.props.nextUrl))}}>
                                      Load more quizzes
                              </button>
                          </div>
                        </div>
                        <div className="col text-center">
                          <p className="score display-6">Score: {this.props.score}</p>
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
