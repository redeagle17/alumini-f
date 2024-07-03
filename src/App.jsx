import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import AluminiPage from "./Pages/AluminiPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/SignUp" element={<Signup />} />
      <Route exact path="/Alumni" element={<AluminiPage />} />
      <Route exact path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
