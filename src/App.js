import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import React from "react";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path={"/"} element={<Main />} />
        </Route>
        <Route path={"/auth"} element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
