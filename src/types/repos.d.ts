export type RepoType = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  homepage: string;
};

export type RepoListType = RepoType[];

export type ReposErrorType = {
  message: string;
};

export type ReposActionType = {
  type: string;
  payload?: RepoListType | ReposErrorType;
};

export type ReposStateType = {
  loading: boolean;
  data: RepoListType;
  error: ReposErrorType;
};

export type RepoProps = {
  key: number;
  repo: RepoType;
};
