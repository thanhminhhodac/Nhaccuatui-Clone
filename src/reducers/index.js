import { combineReducers } from 'redux';
import artistReducer from './artistReducer';

export default combineReducers({ artistWeekly: artistReducer });
