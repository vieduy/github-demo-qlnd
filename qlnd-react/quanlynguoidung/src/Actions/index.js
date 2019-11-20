import * as types from  './../Constants/ActionTypes';

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}