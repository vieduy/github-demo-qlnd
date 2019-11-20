import * as types from './../Constants/ActionTypes';
import {remove} from 'lodash'

var data = JSON.parse(localStorage.getItem('users'))
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_USER:
            state.push({
                username: action.user.username,
                password: action.user.password,
                team: action.user.team,
                permission: action.user.permission
            });
            localStorage.setItem('users', JSON.stringify(state));
            return [...state];   
        case types.DEL_USER:
            remove(state, (user) =>{
                return user.username === action.user.username;
            });
            localStorage.setItem('users', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default myReducer;