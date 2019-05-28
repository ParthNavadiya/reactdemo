import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';
//import index from './reducers/index';




const store = createStore(postReducer);


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));




serviceWorker.unregister();
