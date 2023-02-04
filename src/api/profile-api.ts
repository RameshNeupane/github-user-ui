import axios from "axios";

export const fetchProfileApi = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  const data = await response.data;
  const {
    avatar_url,
    login,
    html_url,
    name,
    blog,
    location,
    bio,
    followers,
    following,
  } = data;
  return {
    avatar_url,
    login,
    html_url,
    name,
    blog,
    location,
    bio,
    followers,
    following,
  };
};
