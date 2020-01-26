import { combineReducers } from "redux";
import signUp from "./signUp";
import login from "./signIn";
import loans from './loans'

const rootReducer = combineReducers({
  signUp,
  login,
  loans
});

export default rootReducer;
