export type ProfileType = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
};

export type RepoType = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
};

export type RepoProps = {
  key: number;
  repo: RepoType;
};

export type RepoListType = RepoType[];

export type ProfileActionType = {
  type: string;
  payload: ProfileType;
};

export type ReposActionType = {
  type: string;
  payload: RepoListType;
};
