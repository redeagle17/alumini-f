import React, { useContext } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import AluminiPage from "./Pages/AluminiPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AlumniProfileInfo from "./Components/Alumni/AlumniProfileInfo";
import AlumniPersonalInfo from "./Pages/AlumniPersonalInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signUp" element={<Signup />} />
        <Route
          exact
          path="/home"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/alumni"
          element={
            <RequireAuth>
              <AluminiPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/personal_info"
          element={
            <RequireAuth>
              <AlumniPersonalInfo />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:user_id"
          element={
            <RequireAuth>
              <AlumniProfileInfo />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
