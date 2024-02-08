import React, { useState, useContext } from "react";

import { UserContext } from "../../App";

const creds = {
  username: "geek",
  password: "happy",
};

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (creds.username === user.username && creds.password === user.password) {
      setIsAuthenticated(true);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={user.username}
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={user.password}
          type="password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
