import { combineReducers } from 'redux';
import * as counterReducers from './counter';

export default combineReducers(Object.assign(
    counterReducers,
));
