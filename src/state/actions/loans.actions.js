import * as types from "./actionTypes";
import AxiosWithAuth from "../utils/AxiosWithAuth";

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

export const currentUser = user => {
  return {
    type: types.CURRENT_USER,
    payload: user
  };
};

export const userLoan = loans => {
  return {
    type: types.USER_LOANS,
    payload: loans
  };
};

export const fetchAllLoans = allLoans => {
  return {
    type: types.ADD_LOANS,
    payload: allLoans
  };
};

export const getLoans = () => dispatch => {
  AxiosWithAuth()
    .get("https://my-quick-credit-app.herokuapp.com/api/v2/loans/history")
    .then(({ data }) => {
      dispatch(userLoan(data.data));
    });
};

export const getAllLoans = () => dispatch => {
  AxiosWithAuth()
    .get("https://my-quick-credit-app.herokuapp.com/api/v2/loans")
    .then(({ data }) => {
      dispatch(fetchAllLoans(data.data));
    })
    .catch(error => {
      console.log(error);
    });
};