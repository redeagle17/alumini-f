import { useState, useEffect, Fragment, useContext } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const department_options = [
  { name: "AIML" },
  { name: "CSE" },
  { name: "ECE" },
  { name: "ISE" },
  { name: "EEE" },
  { name: "Others" },
];

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(department_options[0]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState([]);
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
                  <div className="mt-6 grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <label
                        htmlFor="department"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Department
                      </label>
                      <div className="relative mt-1">
                        <Listbox value={department} onChange={setDepartment}>
                          <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                            <span className="block truncate">
                              {department.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </ListboxButton>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {department_options.map((dept, idx) => (
                                <ListboxOption
                                  key={idx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-8 ${
                                      active
                                        ? "bg-blue-100 text-blue-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={dept}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {dept.name}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </Transition>
                        </Listbox>
                      </div>
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor="photo"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Upload Photo
                      </label>
                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
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
