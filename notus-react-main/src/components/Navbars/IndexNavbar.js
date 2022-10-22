/*eslint-disable*/
import React from "react";
import { Link, NavLink } from "react-router-dom";

// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

import Logo from "../../assets/img/logo.png";
import Quote from "../../assets/img/quote-logo.png";
import { FaBars } from "react-icons/fa";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-blueGray-700 top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px- py-3 navbar-expand-lg shadow">
        <div className="bg-blueGray-700 container px- mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/" className=" ">
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="flex justify-between flex content-center"
              >
                <img
                  className="p-0 m-auto w-full text-center"
                  style={{ width: "50px", height: "40px" }}
                  src={Logo}
                  alt="logo"
                />
                <img
                  className="p-0"
                  style={{ width: "150px", height: "25px" }}
                  src={Quote}
                  alt="quote"
                />
              </div>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  text-white  border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex bg-blueGray-700 flex-grow items-center  lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-white ">
              <li className="flex  justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                  href="#nav-contact-us"
                  >
                  <span className="hidden lg:inline-block ml-2">تماس با ما</span>
                  <span className="lg:hidden inline-block ml-2">تماس با ما</span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#nav-projects"
               
                >
                   <span className="hidden lg:inline-block ml-2">پروژه ها</span>
                 
                  <span className="lg:hidden inline-block ml-2">
                  پروژه ها
                  </span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#nav-network"
               
                >
                   <span className="hidden lg:inline-block ml-2">  شبکه و زیرساخت </span>
                 
                  <span className="lg:hidden inline-block ml-2">
                    شبکه و زیرساخت
                  </span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#nav-software"
                
                >
                   <span className="hidden lg:inline-block ml-2">محصولات نرم افزاری</span>
               
                  <span className="lg:hidden inline-block ml-2">
                    محصولات نرم افزاری
                  </span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#nav-about-us"
                >
             <span className="hidden lg:inline-block ml-2">درباره ما</span>

                  <span className="lg:hidden inline-block ml-2">
                  درباره ما
                  </span>
                </a>
              </li>
              <li className="flex justify-center items-center">
                <NavLink
                  to="/auth"
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  ورود
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
