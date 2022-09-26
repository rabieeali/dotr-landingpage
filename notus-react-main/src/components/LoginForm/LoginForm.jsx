import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import { Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";
import axios from "../../api/axios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { auth, setAuth } = useAuth();

  const LOGIN_URL = "/api/auth"; // for server publish
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);
  const [username] = useState();
  const [password] = useState();

  const [tick, setTick] = useState(false);

  const [val, setVal] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("auth");
    const initialValue = JSON.parse(saved);
    // console.log("initial", initialValue);
    return initialValue || "";
  });

  console.log(val.username);
  console.log(val.password);

  const tickHandler = (e) => {
    setTick(!tick);
    if (!tick) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ username: user, password: pwd })
      );
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // const nam = "info@dotrco.com";
  // const ramz = "0062337793";
  const loginHandler = async (e) => {
    console.log("submited");

    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ Username: user, Password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const jResponse = JSON.parse(response?.data);
      // console.log(jResponse);

      //console.log(JSON.parse(response?.data));
      //console.log('login items>>', jResponse);

      // const roles = jResponse?.Roles.replace("[", "")
      //   .replace("]", "")
      //   .split(",");
      // const forms = jResponse?.Forms.replace("[", "")
      //   .replace("]", "")
      //   .split(",");
      const userId = jResponse?.UserId;
      const accessToken = jResponse?.AccessToken;
      const name = jResponse?.Name;
      const family = jResponse?.Family;
      const fullName = jResponse?.FullName;
      const userTypeName = jResponse?.UserTypeName;
      const userName = jResponse?.UserName;
      // const placeGroups = jResponse?.PlaceGroups;

      // const roles = response?.data?.roles;

      setAuth({
        userId,
        accessToken,
        name,
        family,
        fullName,
        userTypeName,
        userName,
      });

      console.log("auth", auth);

      resetUser();

      setPwd("");

      navigate("/history");

      toast.success(`${name} عزیز خوش آمدید`);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("ارتباط با سرور مقدور نیست");
      } else if (err.response?.status === 400) {
        setErrMsg("نام کاربری و گذرواژه معتبر نیست");
      } else if (err.response?.status === 401) {
        setErrMsg("دسترسی وجود ندارد");
      } else {
        console.log(err.response?.errMsg);
        setErrMsg("ورود ناموفق است");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4 " style={{ maxWidth: "450px" }}>
          <div className="login-card relative  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
            <div className="flex-auto mt-5 px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 flex justify-between mb-5 font-bold">
                <small
                  ref={errRef}
                  className={
                    errMsg ? "text-sm text-danger" : " IRANSansBold offscreen"
                  }
                  aria-live="assertive"
                >
                  {errMsg}
                </small>
                <small> ورود به حساب کاربری</small>
              </div>
              <form
                onSubmit={loginHandler}
                className="flex flex-col align-center"
                autoComplete="true"
              >
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs text-right font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    نام کاربری
                  </label>
                  <input
                    name="email"
                    label="نام کاربری"
                    placeholder="نام کاربری خود را وارد کنید"
                    type="text"
                    value={user || val.username}
                    ref={userRef}
                    {...userAttribs}
  
                    className="text-right border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    // value={pwd || val.password}
                    name="password"
                    type="password"
                    className="text-right border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="پسورد"
                  />
                </div>
                <div className="flex justify-end mt-3">
                  <label className="inline-flex items-center cursor-pointer t">
                    <span className="ml-2 text-sm font-semibold text-white">
                      مرا بخاطر بسپار
                    </span>
                    <input
                      type="checkbox"
                      id="persist"
                      // onChange={toggleCheck}
                      onChange={tickHandler}
                      value={tick}
                      checked={tick}
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    ورود
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="flex flex-wrap mt-6 relative"
            style={{ paddingInline: "10px" }}
          >
            <div className="w-1/2" style={{ color: "#fff" }}>
              <small>فراموشی رمز عبور</small>
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
