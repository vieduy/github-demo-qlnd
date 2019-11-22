import * as types from './../Constants/ActionTypes';
import { remove } from 'lodash';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_USER:
            state.push({
              username: action.user.username,
              password: action.user.password,
              doihinh: action.user.doihinh,
              type: parseInt(action.user.type)
            });
            return [...state];   
        case types.DEL_USER:
                  remove(state, (user) =>{
                    return user._id === action.user._id;
                  });
                  return [...state]; 
        case types.GET_USERS:
            state = [...action.users];
            return [...state]; 
        default: return [...state];        
    }
}

export default myReducer;