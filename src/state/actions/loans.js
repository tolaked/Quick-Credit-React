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




export const getLoans = () => dispatch => {
  AxiosWithAuth()
    .get("https://my-quick-credit-app.herokuapp.com/api/v2/loans/history")
    .then(({ data }) => {
      // dispatch(userLoan(data.data));
    });
};

export const getAllLoans = () => dispatch => {
  AxiosWithAuth()
    .get("https://my-quick-credit-app.herokuapp.com/api/v2/loans")
    .then(({ data }) => {
      // dispatch(fetchAllLoans(data.data));
    })
    .catch(error => {
      console.log(error);
    });
};
