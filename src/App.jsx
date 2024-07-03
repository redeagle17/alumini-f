import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/SignUp" element={<Signup />} />
    </Routes>
  );
}

export default App;
