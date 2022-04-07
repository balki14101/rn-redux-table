import {combineReducers} from 'redux';
import counterReducer from './counter';

const AppReducer = combineReducers({counter: counterReducer});

export default AppReducer;
