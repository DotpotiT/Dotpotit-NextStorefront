"use client"
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
// import { userLogin } from "../actions/auth";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // try {
    //   const res = await userLogin({
    //     email: details.email,
    //     password: details.password,
    //   })

    //   console.log("login ", res);

    //   if (res.data) {
    //     //saving it to local storage
    //     window.localStorage.setItem("auth", JSON.stringify(res.data.user));

    //     // saving it to redux
    //     // dispatch({
    //     //   type: "LOGGED_IN_USER",
    //     //   payload: res.data.user,
    //     // });

    //     if (res.status === 200) {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Login successful",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }

    //     // navigate("/");
    //   }
    // } catch (error) {
    //   console.log(
    //     error.response.data.message ==
    //       "Email is not varified, please verify email"
    //   );
    //   if (
    //     error.response.data.message ==
    //     "Email is not varified, please verify email"
    //   ) {
    //     console.log(
    //       "abcd",
    //       `<a href="/otp/${details.email}">Verify your Email</a>`
    //     );

    //     Swal.fire({
    //       title: "Log in Failed",
    //       text: error.response.data.message,
    //       icon: "error",
    //       footer: `<a href="/otp/${details.email}">Verify your Email</a>`,
    //     });
    //   } else {
    //     Swal.fire({
    //       title: "Log in Failed",
    //       text: error.response.data.message,
    //       icon: "error",
    //     });
    //   }

    //   console.log("error", error);
    // }
  };

  return (
    <div>
      <section className="font-poppins py-7 pt-32 lg:pt-16 overflow-hidden h-auto">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
          <div className="flex flex-col items-center h-full md:flex-row">
            <div className="flex items-center justify-center w-full h-screen px-1 lg:w-3/6 md:mx-auto md:w-3/5 lg:px-16 xl:px-12">
              <div className="z-10 w-full p-10 bg-white shadow-lg dark:bg-gray-900 h-100">
                <h2 className="mt-10 mb-4 text-xl font-bold text-center leading-tight text-blue-800 md:text-3xl dark:text-gray-300  ">
                  Login to your account
                </h2>
                <a
                  href="#"
                  className="flex items-center justify-center py-4 my-4 border-2 rounded-xl border-blue-800 dark:border-gray-600 hover:bg-blue-200 dark:hover:bg-gray-800"
                >
                  <span className="inline-block mr-4 text-blue-800 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </span>
                  <span className="text-xs font-bold text-blue-800 uppercase lg:text-sm dark:text-gray-400 ">
                    Login with Google
                  </span>
                </a>
                <div className="text-center pt-3">Or</div>
                <form className="mt-6">
                  <div>
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      value={details.email}
                      className="w-full px-4 py-4 mt-2 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mt-5">
                    <div>
                      <div className="relative flex items-center mt-2">
                        <input
                          name="password"
                          onChange={handleChange}
                          type={passwordVisible ? "text" : "password"}
                          className="w-full px-4 py-4 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800 "
                          placeholder="Enter password"
                          required
                        />
                        <svg
                          onClick={togglePasswordVisibility}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="absolute right-0 mr-3 cursor-pointer dark:text-gray-300"
                          fill="currentColor"
                          color="blue"
                          viewBox="0 0 24 24"
                        >
                          {passwordVisible ? (
                            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                          ) : (
                            <path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" />
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    // onClick={handleLogin}
                    className="w-full px-4 py-4 mt-6 font-semibold text-white  bg-blue-700 rounded-xl  dark:text-white hover:text-white hover:bg-blue-200 dark:hover:bg-yellow-600 dark:hover:text-white"
                    type="submit"
                  >
                    LOGIN
                  </button>
                  <div className="mt-4 text-right">
                    <a
                      href="#"
                      className="text-sm font-normal text-blue-700 dark:hover:text-blue-400 dark:text-blue-300"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <p className="mt-5 text-sm text-gray-700 mb-7 dark:text-gray-400">
                    Need an account?
                    <a
                      href="/signup"
                      className="font-medium text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400"
                    >
                      Create an account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
