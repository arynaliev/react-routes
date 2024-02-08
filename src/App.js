import React, { createContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import {
  HomePage,
  AccountPage,
  NotFoundPage,
  AboutUsPage,
  LoginPage,
  AdminPage,
} from "./pages";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {/* <nav>
          <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/LoginPage"}>Login</Link>
            </li>
            <li>
              <Link to={"/AboutUsPage"}>About Us</Link>
            </li>
            <li>
              <Link to={"/AccountPage"}>Account</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route>
            <Route path="/accountPage" element={<AccountPage />} />
          </Route>
          <Route>
            <Route path="/adminPage" element={<AdminPage />} />
          </Route>
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
