/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";


import Logo from '../../assets/img/logo.png'
import Quote from '../../assets/img/quote-logo.png'

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-blueGray-700 top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px- py-3 navbar-expand-lg shadow">
        <div className="container px- mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className=" "
            >
              <div style={{display:'flex' , alignItems:'center'}} className="flex justify-between flex content-center">

              <img className="p-0 m-auto w-full text-center" style={{width:'50px',height:'40px'}} src={Logo} alt="logo"  />
              <img className="p-0" style={{width:'150px',height:'25px'}} src={Quote} alt="quote"  />
              </div>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  text-white  border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-white bg-blueGray-700">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  {/* <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " /> */}
                  تماس با ما
                  <span className="lg:hidden inline-block ml-2">تماس با ما</span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                
                  شبکه و زیرساخت
                  <span className="lg:hidden inline-block ml-2">شبکه و زیرساخت </span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  {/* <i className="text-blueGray-400 fab fa-github text-lg leading-lg " /> */}
                  محصولات نرم افزاری
                  <span className="lg:hidden inline-block ml-2">محصولات نرم افزاری</span>
                </a>
              </li>

              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  {/* <i className="text-blueGray-400 fab fa-github text-lg leading-lg " /> */}
                 درباره ما
                  <span className="lg:hidden inline-block ml-2">محصولات نرم افزاری</span>
                </a>
              </li>
              <li className="flex justify-center items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  {/* <i className="text-blueGray-400 fab fa-github text-lg leading-lg " /> */}
               خانه
                  <span className="lg:hidden inline-block ml-2">محصولات نرم افزاری</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
