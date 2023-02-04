import React, { FormEvent, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import "./UsernameForm.css";
import { UsernameType } from "../../types/username";
import { setUsername } from "../../redux/username/action";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const username = useSelector<RootStateOrAny, UsernameType>(
    (state) => state.username
  );
  const [usernameInput, setUsernameInput] = useState("RameshNeupane");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (usernameInput !== username.username) {
      dispatch(setUsername(usernameInput));
    }
  };

  return (
    <form className="form" method="post" onSubmit={handleSubmit}>
      <div className="form-username">
        <label htmlFor="username">Github Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="RameshNeupane"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-btn">
        Search
      </button>
    </form>
  );
};

export default UsernameForm;
