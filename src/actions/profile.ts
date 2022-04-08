import { ProfileType } from "../types/types";

export const SET_PROFILE = "SET_PROFILE";

export const setProfile = (profile: ProfileType) => ({
  type: SET_PROFILE,
  payload: profile,
});
