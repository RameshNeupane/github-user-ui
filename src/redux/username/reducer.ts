import * as actions from "./type";
import { UsernameActionType, UsernameType } from "../../types/username";

const initialState: UsernameType = {
  username: "",
};

export const usernameReducer = (
  state = initialState,
  action: UsernameActionType
) => {
  switch (action.type) {
    case actions.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
