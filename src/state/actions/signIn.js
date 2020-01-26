import * as types from '../constants/signIn';
import axios from 'axios'

const loginRequest = payload =>({
    type: types.LOGIN_REQUEST,
    payload
})
const loginSuccess = payload =>({
    type: types.LOGIN_SUCCESS,
    payload
})

const loginError = payload =>({
    type: types.LOGIN_ERROR,
    payload
})

export const doLogin = (user) => dispatch => {
    dispatch(loginRequest(true));
    axios
      .post("https://my-quick-credit-app.herokuapp.com/api/v2/auth/signin", user)
      .then(({data})=> {
        console.log('see user data', data)
        localStorage.setItem('token',data.data[0].token)
        dispatch(loginSuccess(data.data[0].user));
      })
      .catch(error  => {
        dispatch(loginError(error.response.data));
      })
      dispatch(loginRequest(false));
  };
  

