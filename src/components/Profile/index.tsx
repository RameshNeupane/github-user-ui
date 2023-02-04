import { useEffect } from "react";
import { FaGithub, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import "./Profile.css";
import { UsernameType } from "../../types/username";
import { ProfileStateType } from "../../types/profile";
import { fetchProfile } from "../../redux/profile/action";

const Profile = () => {
  const dispatch = useDispatch();
  const username = useSelector<RootStateOrAny, UsernameType>(
    (state) => state.username
  );
  const profile = useSelector<RootStateOrAny, ProfileStateType>(
    (state) => state.profile
  );

  useEffect(() => {
    if (username.username) {
      dispatch(fetchProfile(username.username));
    }
  }, [username, dispatch]);

  if (profile?.loading) {
    return <div className="loading">Loading...</div>;
  }

  if (profile?.error?.message) {
    return <div className="error">{profile.error.message}</div>;
  }

  if (profile?.data?.name) {
    return (
      <div className="profile">
        <div className="profile-img-container">
          <img
            src={profile.data?.avatar_url}
            alt={profile?.data?.name}
            className="profile-img"
          />
        </div>
        <div>
          <FaGithub />{" "}
          <a
            href={profile?.data?.html_url}
            target="_blank"
            rel="noreferrer"
            className="username"
            title="Github"
          >
            {profile?.data?.login}
          </a>
        </div>
        <div className="fullname">{profile?.data?.name}</div>
        <div className="location">
          <FaMapMarkerAlt /> {profile?.data?.location}
        </div>
        <div className="bio">{profile?.data?.bio}</div>
        <div className="follower-following">
          <div className="followers">
            <span>{profile?.data?.followers}</span>
            <span>followers</span>
          </div>
          <div className="following">
            <span>{profile?.data?.following}</span>
            <span>following</span>
          </div>
        </div>
        <div className="website">
          <a
            href={profile?.data?.blog}
            target="_blank"
            rel="noreferrer"
            title="portfolio website"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Profile;
