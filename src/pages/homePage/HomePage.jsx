import React from "react";
import "./homePage.style.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="todo-app boxes">
        <Link to={"/TodoApp"}>Todo App</Link>
      </div>
      <div className="counter-app boxes">
        <Link to={"/CounterApp"}>Counter App</Link>
      </div>
      <div className="my-secrets boxes">
        <Link to={"/MySecrets"}>My Secrets</Link>
      </div>
      <div className="about-me boxes">
        <Link to={"/AboutMe"}>About Me</Link>
      </div>
    </div>
  );
};

export default HomePage;
