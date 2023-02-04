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

export type ProfileErrorType = {
  message: string;
};

export type ProfileActionType = {
  type: string;
  payload?: ProfileType | ProfileErrorType;
};

export type ProfileStateType = {
  loading: boolean;
  data: ProfileType;
  error: ProfileErrorType;
};
