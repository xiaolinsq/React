import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { checkAuth } from './actions';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer';
import Content from './components/mainPage/content';
import CoursePage from './components/course/course_page';
import Login from './components/loginpage/login';
import Homework from './components/course/teacher/tag/homework';
import MainPageOpen from './components/mainPage/mainPageOpen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/tag/:index/:id" component={Homework} />
          <Route path="/:coursetype/:id" component={CoursePage} />
          <Route path="/public.html" component={MainPageOpen} />
          <Route path="/course" component={Content} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
