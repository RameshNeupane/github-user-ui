import {
  RepoListType,
  ReposErrorType,
  ReposActionType,
} from "../../types/repos";
import * as actions from "./type";
import { fetchReposApi } from "../../api/repos-api";
import { MyDispatchType } from "../../types/dispatch";

export const fetchReposRequested = () => {
  return {
    type: actions.FETCH_REPOS_REQUESTED,
  };
};

export const fetchReposSucceeded = (data: RepoListType): ReposActionType => {
  return {
    type: actions.FETCH_REPOS_SUCCEEDED,
    payload: data,
  };
};

export const fetchReposFailed = (data: ReposErrorType): ReposActionType => {
  return {
    type: actions.FETCH_REPOS_FAILED,
    payload: data,
  };
};

export const fetchRepos =
  (username: string) => async (dispatch: MyDispatchType) => {
    dispatch(fetchReposRequested());
    try {
      const response = await fetchReposApi(username);
      dispatch(fetchReposSucceeded(response));
    } catch (error) {
      dispatch(fetchReposFailed({ message: "Repos error occured." }));
    }
  };
