import * as actions from "./type";
import { ProfileActionType } from "../../types/profile";

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionType
) => {
  switch (action.type) {
    case actions.FETCH_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload,
        },
        error: {},
      };
    case actions.FETCH_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        data: {},
        error: {
          ...state.error,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
