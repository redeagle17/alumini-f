import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import AluminiPage from "./Pages/AluminiPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AlumniProfileInfo from "./Components/Alumni/AlumniProfileInfo";
import AlumniPersonalInfo from "./Pages/AlumniPersonalInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/signUp" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/alumni" element={<AluminiPage />} />
        <Route exact path="/personal_info" element={<AlumniPersonalInfo />} />
        <Route exact path="/profile/:user_id" element={<AlumniProfileInfo />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
