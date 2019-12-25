import * as types from "./actionTypes";

export const fetching = status => ({
  type: types.REQUESTING,
  payload: status
});

export const Success = status => ({
  type: types.SUCCESS,
  payload: status
});

export const showError = error => ({
  type: types.ERROR,
  payload: error
});

export const doSignUp = user => dispatch => {
  dispatch(Request(true));
  if (user.name) {
    dispatch(Success(true));
  } else {
    dispatch(showError("error"));
    console.log("error");
  }
};
