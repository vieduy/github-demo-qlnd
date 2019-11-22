import * as types from  './../Constants/ActionTypes';
import callApi from './../api/apiCaller';

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}

export const addUserRequest = (user) => {
    return dispatch => {
        callApi('', 'POST', {
            username: user.username,
            password: user.password,
            doihinh: user.doihinh,
            type: parseInt(user.type)
          })
          .then( response => {
              if (response.status === 200){
                dispatch(addUser(user));
              }
            }); 
    }
}

export const delUser = (user) => {
    return {
        type: types.DEL_USER,
        user
    }
}

export const delUserRequest = (user) => {
    return (dispatch) => {
        callApi(`${user._id}`, 'DELETE', null)
        .then( response => {
            if (response.status === 200)
                console.log(response); 
                dispatch(delUser(user));
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export const getUsers = users => {
    return {
        type: types.GET_USERS,
        users
    }
}

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('', 'GET', null)
        .then( response => {
          dispatch(getUsers(response.data));
        });
    }
}