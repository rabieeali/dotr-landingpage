import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth, useAuthActions } from "../../context/UserProvider";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const dispatch = useAuthActions();
  const state = useAuth();
  const history = useHistory();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = (formData) => {
    dispatch({ type: "USER_LOGIN", payload: formData });
    if (formData.email === "admin" && formData.password === "admin") {
      toast.success(`عزیز خوش آمدی ${formData.email}`);
      history.push("/panel/ticket");
    } else {
      toast.error("کاربر وجود ندارد");
      history.push("/");
    }
  };
  console.log(state.user);
  return (
    <>
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4 ">
          <div className="login-card relative  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
            <div className="flex-auto mt-5 px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small> ورود به حساب کاربری</small>
              </div>
              <form className="flex flex-col align-center">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs text-right font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ایمیل
                  </label>
                  <input
                    name="email"
                    onChange={onChange}
                    type="email"
                    className="text-right border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="ایمیل"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="text-right block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    پسورد
                  </label>
                  <input
                    name="password"
                    onChange={onChange}
                    type="password"
                    className="text-right border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="پسورد"
                  />
                </div>
                <div className="flex justify-end">
                  <label className="inline-flex items-center cursor-pointer t">
                    <span className="ml-2 text-sm font-semibold text-white">
                      مرا بخاطر بسپار
                    </span>
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                  </label>
                </div>

                <div className="text-center mt-6">
                  {/* <Link to={formData.email && formData.password ? '/ticketing' : '/notFound'}> */}
                  <button
                    onClick={() => loginHandler(formData)}
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    ورود
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-blueGray-200"
              >
                <small>فراموشی رمز عبور</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link to="/auth/register" className="text-blueGray-200">
                <small>ثبت نام</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
