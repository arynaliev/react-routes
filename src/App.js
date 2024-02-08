import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage } from "./pages";
import { aboutMe } from "./pages/aboutMe/aboutMe";
import { mySecrets } from "./pages/mySecrets/mySecrets";
// import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./App.css";
import TodoApp from "./applications/todoApp/TodoApp";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/loginPage" element={<LoginPage />} /> */}
          <Route>
            <Route path="/todoApp" element={<TodoApp />} />
          </Route>
          <Route>
            <Route path="/mySecrets" element={mySecrets.first} />
          </Route>
          <Route path="/aboutMe" element={aboutMe} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
