import { FaStar } from "react-icons/fa";

import "./Repo.css";
import { RepoProps } from "../../types/repos";

const Repo = ({ repo }: RepoProps) => {
  const { name, stargazers_count, html_url, description, language, homepage } =
    repo;

  return (
    <div className="repo">
      <div className="repo-top">
        <div className="repo-name">{name}</div>
        <div className="repo-star">
          <span>
            <FaStar />
          </span>
          <span>{stargazers_count}</span>
        </div>
        <div className="repo-link">
          <a href={html_url} target="_blank" rel="noreferrer">
            view repo
          </a>
        </div>
        {homepage && (
          <div className="homepage-link">
            <a href={homepage} target="_blank" rel="noreferrer">
              view demo
            </a>
          </div>
        )}
      </div>
      <p className="description">{description}</p>
      <div className="language">made with: {language}</div>
    </div>
  );
};

export default Repo;
