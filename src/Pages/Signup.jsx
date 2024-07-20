import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { setDispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const res = await axios.post(
        "https://alumniconnect-d4socl65y-ankur-singhs-projects-b0407e94.vercel.app/api/v1/users/register",
        userData
      );
      setDispatch({ type: "LOGIN", payload: res.data.data });
      toast.success(res.data.message, {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/personal_info");
      }, 2000);
    } catch (error) {
      const res = error.response;
      toast.error(res.data.message);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h1 className=" font-bold text-2xl text-gray-500 dark:text-gray-300">
                  Create your Account
                </h1>
              </div>
              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="confirm_password"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="********"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Register Account
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Login
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
