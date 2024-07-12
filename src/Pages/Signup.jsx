import { useState, useEffect, Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [imageURL, setImageURL] = useState("");
  // const [per, setPerc] = useState(null);
  // const navigate = useNavigate();
  // const { dispatch } = useContext(AuthContext);
  // const [errors, setErrors] = useState({});

  // const validate = async () => {
  //   if (!email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = "Email is invalid";
  //   }
  //   if (!password) {
  //     errors.password = "Password is required";
  //   }
  //   return errors;
  // };

  // handleSubmit function is incomplete
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // const validationErrors = await validate();
  // if (Object.keys(validationErrors).length === 0) {
  //   const userData = {
  //     email: email,
  //     password: password,
  // ---------- ADD MORE FIELDS TO SAVE IN DATABASE--------------
  //   };
  //   try {
  //     const res = await axios.post(
  //       "https://book-store-backend-alpha.vercel.app/book_store/users/sign_in",
  //       userData
  //     );
  //     if (res.data) {
  //       toast.success("Login successful!");
  //       localStorage.setItem("Users", JSON.stringify(res.data.user));
  //       setInterval(() => {
  //         window.location.reload();
  //       }, 1000);
  //     }
  //   } catch (err) {
  //     toast.error(err.response.data.message);
  //     setInterval(() => {}, 2000);
  //   }
  //   setErrors({});
  // } else {
  //   setErrors(validationErrors);
  // }
  //   alert("Signup clicked");
  // };
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
                <form>
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
                      required
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
                        required
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
                        required
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
