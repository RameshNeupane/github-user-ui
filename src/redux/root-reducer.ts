import { combineReducers } from "redux";

import { reposReducer } from "./repos/reducer";
import { profileReducer } from "./profile/reducer";
import { usernameReducer } from "./username/reducer";

export const rootReducer = combineReducers({
  username: usernameReducer,
  profile: profileReducer,
  repos: reposReducer,
});
