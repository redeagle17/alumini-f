import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Option } from "@material-tailwind/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setDispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "https://alumni-b.vercel.app/api/v1/users/login",
        userData
      );
      if (res.data) {
        const payload = res.data.data;
        setDispatch({ type: "LOGIN", payload: payload });
        toast.success(res.data.message, {
          autoClose: 1000,
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url(https://www.alumni.ox.ac.uk/sites/default/files/styles/listing_tile_text_displayed_image/public/alumni_group_network.png?itok=mdK0sHFb)] bg-white">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white shadow-black">
                  Alumnati
                </h2>

                <p className="max-w-xl mt-3 text-gray-300 shadow-black">
                  Place to know and interact with Alumni.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Alumnati
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
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
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 required"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 required"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="/SignUp"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
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

export default Login;
