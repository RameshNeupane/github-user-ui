import axios from "axios";

export const fetchReposApi = async (username: string) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos?sort=created`
  );
  const data = await response.data;
  return data;
};
