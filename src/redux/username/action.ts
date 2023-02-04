import * as actions from "./type";
import { UsernameActionType } from "../../types/username";

export const setUsername = (data: string): UsernameActionType => {
  return {
    type: actions.SET_USERNAME,
    payload: data,
  };
};
