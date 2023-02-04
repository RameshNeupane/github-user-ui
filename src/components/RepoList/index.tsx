import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import "./RepoList.css";
import Repo from "../Repo";
import { UsernameType } from "../../types/username";
import { fetchRepos } from "../../redux/repos/action";
import { ReposStateType, RepoType } from "../../types/repos";

const RepoList = () => {
  const dispatch = useDispatch();
  const username = useSelector<RootStateOrAny, UsernameType>(
    (state) => state.username
  );
  const repos = useSelector<RootStateOrAny, ReposStateType>(
    (state) => state.repos
  );

  useEffect(() => {
    if (username.username) {
      dispatch(fetchRepos(username.username));
    }
  }, [username, dispatch]);

  if (repos?.loading) {
    return <div className="loading">Loading...</div>;
  }

  if (repos?.error?.message) {
    return <div className="error">{repos.error.message}</div>;
  }

  if (repos?.data?.length) {
    return (
      <div className="repo-list">
        <h1 className="repo-list-title">Repositories</h1>
        <hr />
        {repos?.data?.map((repo: RepoType) => {
          return <Repo key={repo.id} repo={repo} />;
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RepoList;
