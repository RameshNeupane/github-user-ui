import * as actions from "./type";
import { ReposActionType } from "../../types/repos";

const initialState = {
  loading: false,
  data: [],
  error: {},
};

export const reposReducer = (state = initialState, action: ReposActionType) => {
  switch (action.type) {
    case actions.FETCH_REPOS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_REPOS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: {},
      };
    case actions.FETCH_REPOS_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
