import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, MySecrets, NotFoundPage, AboutMe } from "./pages";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./App.css";
import TodoApp from "./applications/todoApp/TodoApp";
import CounterApp from "./applications/counterApp/CounterApp";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/loginPage" element={<LoginPage />} /> */}
          <Route>
            <Route path="/todoApp" element={<TodoApp />} />
          </Route>
          <Route path="/counterApp" element={<CounterApp />} />
          <Route>
            <Route path="/mySecrets" element={<MySecrets />} />
          </Route>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
