import { combineReducers } from 'redux';
import users from './user';

const myReducer = combineReducers({
    users
});

export default myReducer;