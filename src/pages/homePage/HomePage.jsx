import React from "react";
import "./homePage.style.css";
import { Route, Routes, Link } from "react-router-dom";
// import { NotFoundPage, AboutUsPage, LoginPage } from "./pages";
import LoginPage from "./pages";

const HomePage = () => {
  return (
    <>
      <div className="home-page-container">
        <div className="todo-app box">
          <Link to={"/LoginPage"}>Todo App</Link>
        </div>
        <div className="counter-app box">
          <Link to={"/CounterApp"}>Counter App</Link>
        </div>
        <div className="my-secrets box">
          <Link to={"/MySecrets"}>My Secrets</Link>
        </div>
        <div className="about-me box">
          <Link to={"/AboutMe"}>About Me</Link>
        </div>
      </div>

      <Routes>
        <Route path="/loginPage" element={<LoginPage />} />
        {/* <Route>
          <Route path="/accountPage" element={<AccountPage />} />
        </Route> 
        <Route>
          <Route path="/adminPage" element={<AdminPage />} />
  </Route>*/}
        <Route path="/aboutMe" element={<AboutUsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default HomePage;
