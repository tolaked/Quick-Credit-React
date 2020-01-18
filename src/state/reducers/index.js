import { combineReducers } from "redux";
import signUp from "./signUp";
import login from "./signIn";

const rootReducer = combineReducers({
  signUp: signUp,
  login
});

export default rootReducer;
