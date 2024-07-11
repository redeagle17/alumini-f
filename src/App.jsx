import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import AluminiPage from "./Pages/AluminiPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AlumniInfo from "./Components/Alumni/AlumniInfo";
import AlumniPersonalInfo from "./Pages/AlumniPersonalInfo";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signUp" element={<Signup />} />
      <Route exact path="/alumni" element={<AluminiPage />} />
      <Route exact path="/personal_info" element={<AlumniPersonalInfo />} />
      <Route exact path="/profile/:username/:id" element={<AlumniInfo />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
