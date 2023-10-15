import { FaStar } from "react-icons/fa";

import "./Repo.css";
import { RepoProps } from "../../types/repos";

const Repo = ({ repo }: RepoProps) => {
    const {
        name,
        stargazers_count,
        html_url,
        description,
        language,
        homepage,
    } = repo;

    return (
        <div className="repo">
            <div className="repo-top">
                <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-name"
                    title="Github"
                >
                    {name}
                </a>
                <div className="repo-star">
                    <span>
                        <FaStar />
                    </span>
                    <span>{stargazers_count}</span>
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
