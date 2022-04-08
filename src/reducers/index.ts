import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { reposReducer } from "./repos";

export const allReducers = combineReducers({
  profileReducer,
  reposReducer,
});
