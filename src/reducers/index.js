import { combineReducers } from 'redux';
import postReducer from './postReducer';
import counter from './counter';


export default combineReducers({postReducer,counter});