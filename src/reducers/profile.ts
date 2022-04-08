import { SET_PROFILE } from "../actions/profile";
import { ProfileActionType, ProfileType } from "../types/types";

const initialState: ProfileType = {} as ProfileType;

export const profileReducer = (
  state = initialState,
  action: ProfileActionType
) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
