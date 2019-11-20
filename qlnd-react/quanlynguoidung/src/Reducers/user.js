import * as types from './../Constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('users'))
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_USER:
            state.push({
                username: action.user.username,
                password: action.user.password,
                team: action.user.team,
                permisson: action.user.permisson
            });
            console.log(state);
            localStorage.setItem('users', JSON.stringify(state));
            return [...state];   
        default: return state;
    }
}

export default myReducer;