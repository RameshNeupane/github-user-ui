import "./Profile.css";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProfile } from "../../actions/profile";
import { FaGithub, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  const profile = useSelector<RootStateOrAny, any>(
    (state: RootStateOrAny) => state.profileReducer
  );
  const dispatch = useDispatch();

  const getProfile = async (url: string) => {
    const response = await axios.get(url);
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
    dispatch(
      setProfile({
        avatar_url,
        login,
        html_url,
        name,
        blog,
        location,
        bio,
        followers,
        following,
      })
    );
  };

  useEffect(() => {
    getProfile("https://api.github.com/users/RameshNeupane");
  }, []);

  return (
    <div className="profile">
      <div className="profile-img-container">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="profile-img"
        />
      </div>
      <div>
        <FaGithub />{" "}
        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
          className="username"
          title="Github"
        >
          {profile.login}
        </a>
      </div>
      <div className="fullname">{profile.name}</div>
      <div className="location">
        <FaMapMarkerAlt /> {profile.location}
      </div>
      <div className="bio">{profile.bio}</div>
      <div className="follower-following">
        <div className="followers">
          <span>{profile.followers}</span>
          <span>followers</span>
        </div>
        <div className="following">
          <span>{profile.following}</span>
          <span>following</span>
        </div>
      </div>
      <div className="website">
        <a
          href={profile.blog}
          target="_blank"
          rel="noreferrer"
          title="portfolio website"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Profile;
