import { RepoListType } from "../types/types";

export const SET_REPOS = "SET_REPOS";

export const setRepos = (repoList: RepoListType) => ({
  type: SET_REPOS,
  payload: repoList,
});
