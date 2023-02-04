import {
  ProfileType,
  ProfileErrorType,
  ProfileActionType,
} from "../../types/profile";
import * as actions from "./type";
import { MyDispatchType } from "../../types/dispatch";
import { fetchProfileApi } from "../../api/profile-api";

export const fetchProfileRequested = (): ProfileActionType => {
  return {
    type: actions.FETCH_PROFILE_REQUESTED,
  };
};

export const fetchProfileSucceeded = (data: ProfileType): ProfileActionType => {
  return {
    type: actions.FETCH_PROFILE_SUCCEEDED,
    payload: data,
  };
};

export const fetchProfileFailed = (
  data: ProfileErrorType
): ProfileActionType => {
  return {
    type: actions.FETCH_PROFILE_FAILED,
    payload: data,
  };
};

export const fetchProfile =
  (username: string) => async (dispatch: MyDispatchType) => {
    dispatch(fetchProfileRequested());
    try {
      const response = await fetchProfileApi(username);
      dispatch(fetchProfileSucceeded(response));
    } catch (error) {
      dispatch(fetchProfileFailed({ message: "Profile error occured." }));
    }
  };
