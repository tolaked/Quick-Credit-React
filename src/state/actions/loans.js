import * as types from "../constants/loans";
import AxiosWithAuth from "../../utils/AxiosWithAuth";

export const loanRequest = status => ({
  type: types.REQUESTING,
  payload: status
});

export const loanSuccess = status => ({
  type: types.SUCCESS,
  payload: status
});

export const loanError = error => ({
  type: types.ERROR,
  payload: error
});


export const getLoans = () => dispatch => {
  dispatch(loanRequest(true))
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
      console.log(data.data)
      dispatch(loanSuccess(data.data));
    })
    .catch(error => {dispatch(loanError(error));
    });
};
