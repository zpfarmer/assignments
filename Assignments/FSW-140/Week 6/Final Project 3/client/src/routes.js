// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/app';
//import About from './components/about';
import NotFound from './components/notfound';
import Projects from './components/projects';
import EditProjects from './components/projects/edit.js';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux'
//import { connect } from 'react-redux'


let store = createStore(todoApp)
console.log(store.getState())


const Routes = (props) => (
<Provider store={store}>
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/projects" component={Projects} />
    <Route path="/editproject/:id" component={EditProjects} />
    <Route path="*" component={NotFound} />
  </Router>
</Provider>
);
 
export default Routes;