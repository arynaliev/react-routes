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

  const handleChange = (e) => {};
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default LoginPage;
