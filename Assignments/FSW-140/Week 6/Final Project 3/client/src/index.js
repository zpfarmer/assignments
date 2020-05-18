import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
//import { render } from 'react-dom'

//import Route from './routes';

import registerServiceWorker from './registerServiceWorker';
import Projects from './components/projects';

// ReactDOM.render(
//   <Routes history={browserHistory} />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <Route path='/projects' component={Projects} />
  </Router>
  ,
  document.getElementById('root')
);

registerServiceWorker();