import React from "react";
import "./homePage.style.css";
import { Route, Routes, Link } from "react-router-dom";
// import { NotFoundPage, AboutUsPage, LoginPage } from "../../pages";
// import TodoApp from "../../applications/todoApp/TodoApp";
// import { mySecrets } from "../mySecrets/mySecrets";

// import CounterApp from "../../applications/counterApp/CounterApp";

const HomePage = () => {
  return (
    <>
      <div className="home-page-container">
        <div className="todo-app box">
          <Link to={"/TodoApp"} target="blank">
            Todo App
          </Link>
        </div>
        <div className="counter-app box">
          <Link to={"/CounterApp"}>Counter App</Link>
        </div>
        <div className="my-secrets box">
          <Link to={"/mySecrets"}>My Secrets</Link>
        </div>
        <div className="about-me box">
          <Link to={"/aboutMe"}>About Me</Link>
        </div>
      </div>

      {/* <Routes>
        <Route path="/counterApp" element={<CounterApp />} />
        <Route>
          <Route path="/todoApp" element={<TodoApp />} />
        </Route>
        <Route>
          <Route path="/mySecrets" element={mySecrets.first} />
        </Route>
        <Route path="/aboutMe" element={mySecrets.second} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes> */}
    </>
  );
};

export default HomePage;
