import { SET_REPOS } from "../actions/repos";
import { ReposActionType, RepoListType } from "../types/types";

const initialState: RepoListType = [] as RepoListType;

export const reposReducer = (state = initialState, action: ReposActionType) => {
  switch (action.type) {
    case SET_REPOS:
      return [...action.payload];

    default:
      return state;
  }
};
