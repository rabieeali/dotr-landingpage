import React from "react";

import Bg from "../assets/img/notFound-removebg-preview.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <main className="container px-5 mx-auto text-center flex flex-col items-center justify-center">
        <img
          style={{ height: "500x", width: "900px", objectFit: "contain" }}
          src={Bg}
        />
        <h1 className="font-bold text-red-500 text-5xl my-2">404</h1>
        <h4 className="font-bold text-2xl my-2">صفحه ی مورد نظر پیدا نشد</h4>
        <Link to="/">
          <button
            className="my-2 bg-indigo-500 text-white active:bg-indigo-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            بازگشت به صفحه ی اصلی
          </button>
        </Link>
      </main>
    </>
  );
};

export default NotFound;
