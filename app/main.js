import "babel-polyfill";

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'react-mdl/extra/material.min.css';

import App from './containers/app';
import AnswerList from './containers/answer-list';
import QuestionResult from './containers/question-result';
import CourtRoom from './containers/court-room';
import GameInformation from './containers/game-information';
import GameForeword from './containers/game-foreword';
import GameFinish from './containers/game-finish';

const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path={App.Path} component={App}>
                <IndexRoute component={GameInformation}/>
                <Route path={GameForeword.Path} component={GameForeword}/>
                <Route path={QuestionResult.Path} component={QuestionResult}/>
                <Route path={AnswerList.Path} component={AnswerList}/>
                <Route path={CourtRoom.Path} component={CourtRoom}/>
                <Route path={GameFinish.Path} component={GameFinish}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));