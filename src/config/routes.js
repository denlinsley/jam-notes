import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Logger from '../components/Logger';
import Main from '../components/Main';
import PhishTest from '../components/PhishTest';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="logger" component={Logger} />
    <Route path="phishtest" component={PhishTest} />
  </Router>
);
