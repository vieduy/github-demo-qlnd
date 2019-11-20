import * as types from  './../Constants/ActionTypes';

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}

export const delUser = (user) => {
    return {
        type: types.DEL_USER,
        user
    }
}