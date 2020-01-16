import * as types from "../constants/signUp";
import axios from "axios";

const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload
});

const signUpRequest = payload => ({
  type: types.SIGNUP_REQUESTING,
  payload
});

const signUpError = payload => ({
  type: types.SIGNUP_ERROR,
  payload
});

export const doSignUp = (user) => dispatch => {
  console.log("action triggered");
  dispatch(signUpRequest(true));
  axios
    .post("https://my-quick-credit-app.herokuapp.com/api/v2/auth/signup", user)
    .then(({data})=> {
      console.log('see',data);
      dispatch(signUpSuccess(data.user));
    })
    .catch(({ error }) => {
      console.log("see error", error);
      dispatch(signUpError("An error occured"));
    })
    dispatch(signUpRequest(false));
};
