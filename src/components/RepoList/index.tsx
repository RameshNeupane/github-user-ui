import axios from "axios";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setRepos } from "../../actions/repos";
import { RepoType } from "../../types/types";
import Repo from "../Repo";
import "./RepoList.css";

const RepoList = () => {
  const repos = useSelector<RootStateOrAny, any>(
    (state: RootStateOrAny) => state.reposReducer
  );
  const dispatch = useDispatch();

  const getRepoList = async (url: string) => {
    const response = await axios.get(url);
    const data = await response.data;
    dispatch(setRepos(data));
  };

  useEffect(() => {
    getRepoList(
      "https://api.github.com/users/RameshNeupane/repos?sort=created"
    );
  }, []);

  return (
    <div className="repo-list">
      <h1 className="repo-list-title">Repositories</h1>
      <hr />
      {repos.map((repo: RepoType) => {
        return <Repo key={repo.id} repo={repo} />;
      })}
    </div>
  );
};

export default RepoList;
