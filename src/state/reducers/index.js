import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loandReducer from "./loanReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loans: loandReducer
});

export default rootReducer;
