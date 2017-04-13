// Import from Library and Framework
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer.js';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, hashHistory, IndexRoute} from 'react-router';

// Components
import App from './components/app/index.jsx';
import Home from './components/home/index.jsx';
import About from './components/about/index.jsx';


// Store and Logger
const logger = createLogger();
let store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger)
);

// Routing
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='About' component={About} />
     </Route>
    </Router>
  </Provider>
  , document.getElementById('app')
);



