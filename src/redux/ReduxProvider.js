import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { quizzes } from '../assets/mock-data';
import thunk from 'redux-thunk'
import React from 'react';
import App from '../App';
import { QUIZZES_URL } from '../constants';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuiz: 0,
            quizzes: [
                ...quizzes
            ],
            nextUrl: QUIZZES_URL
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={ this.store }>
                <div style={{ height: '100%' }} >
                    <App/>
                </div>
            </Provider>
        );
    }

    configureStore() {
        return createStore(
            GlobalState, 
            this.initialState, 
            applyMiddleware(thunk));
    }
}