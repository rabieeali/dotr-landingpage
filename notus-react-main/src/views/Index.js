/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import "../assets/fonts/IRANSansWeb/Iransansx.css";

import Laptop from "../assets/img/laptop.avif";

import Heart from "../assets/img/heart.png";
import Code from "../assets/img/code.png";
import Control from "../assets/img/control.png";
import Website from "../assets/img/website.png";
import Charity from "../assets/img/charity.png";
import Radium from "../assets/img/radium.png";

import "../index.css";
import FooterMain from "components/FooterMain";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section
        style={{ marginTop: "2rem", padding: "12rem", minHeight: "100vh" }}
        className="img-banner   header relative pt-16 items-center flex h-screen max-h-860-px"
      >
        <div className="container flex justify-end ml-auto flex-wrap">
          <div className="w-100 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className=" text-center flex flex-col justify-center sm:pt-0">
              <h2
                s
                className="blur font-semibold w-full text-xl md:text-4xl text-white "
              >
                {/* راه حل نهایی مسائل شما */}
              </h2>
              {/* <p className="mt-4 md:text-lg leading-relaxed text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p> */}
              <div className="">
                <a href="#" className="neon-btn" target="_blank">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  مشاوره
                </a>
                <a href="#" className="neon-btn" target="_blank">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  ورود
                </a>
                {/* <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  ثبت نام و مشاوره{" "}
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  شروع کنید
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* <img src={Tech} alt="tech" /> */}
        {/* <div className="flex flex-wrap flex-col justify-center items-center">
        <div style={{margin:'auto',padding:'0 5rem'}} className="flex text-center text-3xl text-bold text-blueGray-700">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>
        <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  ثبت نام و درخواست مشاوره{" "}
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  شروع کنید
                </a>
              </div>
              </div> */}
      </section>

      <section className=" pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg  bg-darkBlue-700">
                <img
                  alt="laptop"
                  src={Laptop}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <i className="fa fa-info text-white text-5xl"></i>
                  <h4 className="text-xl font-bold text-white text-right">
                    درباره ما
                  </h4>
                  <p className="text-md font-light mt-2 text-white text-center">
                    شرکت فناوری هوشمند داتار با بیش از 20 سال تجربه در زمینه های
                    مختلف فناوری اطلاعات آماده خدمات رسانی و ارائه راهکارهای
                    جامع فناوری اطلاعات می‌باشد.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto text-right">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        عضویت در نظام صنفی خدمات رایانه ای
                      </h6>
                      <p className="mb-4 text-blueGray-500"></p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto text-right">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        شماره عضویت : 21015227
                      </h6>
                      <p className="mb-4 text-blueGray-500"></p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4 text-right">
                  <div className="relative flex flex-col min-w-0 mt-4"></div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        شناسه ملی : 14010706091
                      </h6>
                      <p className="mb-4 text-blueGray-500"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20 ">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 text-center">
              <div className="text-blueGray-500 p-3 text-right inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl text-center flex justify-center mx-auto text-center"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-right">
                راهکارهای جامع فناوری اطلاعات
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-right">
                شرکت فناوری هوشمند داتار با بیش از 20 سال تجربه در زمینه های
                مختلف فناوری اطلاعات آماده خدمات رسانی و ارائه راهکارهای جامع
                فناوری اطلاعات می‌باشد.
                {/* 
                ما با تکیه بر دانش روزامد متخصصین خود در
                بخشهای مختلف افتخار داریم که همواره در استفاده از تکنولوژی برتر
                روز و راه حلهای جامع و کاربردی بهترین بوده ایم! */}
              </p>
              {/* <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Buttons
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Inputs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Labels
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Pagination
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Progressbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Typography
                  </span>
                </div>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                  target="_blank"
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                >
                  View All{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a> */}
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-btn.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-2.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png").default}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-card-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={Heart}
                      />
                      <p className="text-sm text-white mt-4 font-semibold">
                        راهکار جامع ثبت و گزارش گیری اکوکاردیوگرافی قلب
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-card-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md p-2 rounded-full max-w-full w-16 mx-auto  bg-white"
                        src={Control}
                      />
                      <p className="text-sm text-white mt-4 font-semibold">
                        سامانه جامع نظارت مراکز درمانی
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-card-400 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={Charity}
                      />
                      <p className="text-sm text-white mt-4 font-semibold">
                        سامانه جامع خیرین سلامت
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-card-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={Code}
                      />
                      <p className="text-sm text-white mt-4 font-semibold">
                        برنامه نویسی و ارائه راهکارهای مبتنی بر نرم افزار به
                        سفارش مشتری{" "}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-card-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={Website}
                      />
                      <p className="text-sm text-white mt-4 font-semibold">
                        طراحی و توسعه سیستمهای پیشرفته تحت وب بر اساس آخرین
                        تکنولوژی روز
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-card-400 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={Radium}
                      />
                      <p className="text-sm text-white mt-4 font-semibold">
                        سامانه آرشیو و انتقال تصاویر پزشکی
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 text-center">
              <div className="text-blueGray-500 p-3 text-center inline-flex justify-center text-center mx-auto items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl flex justify-center text-center mx-auto "></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-right">
                محصولات نرم افزاری
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-right">
                فناوری هوشمند داتار در طول سالیان متمادی اقدام به طراحی و توسعه
                و بهینه سازی محصولات متعدد نرم افزاری نموده است.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"></p>

              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              ></a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48 text-right">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold text-right">
                  شبکه و زیرساخت
                </h3>
                <p className="mt-4 text-lg text-right leading-relaxed text-blueGray-500">
                  خدمات مشاوره و ارائه راهکار
                  <br />
                  خدمات PASSIVE شبکه
                  <br />
                  خدمات ارتباط بین دفاتر و شعب
                  <br />
                  خدمات مجازی سازی شبکه های کامپیوتری
                  <br />
                  خدمات نگهداری و پشتیبانی شبکه های کامپیوتری
                  <br />
                  راهکارهای ایمن سازی شبکه
                  <br />
                  خدمات ACTIVE شبکه
                </p>
                {/* <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Notus React is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/login.jpg").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/profile.jpg").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/landing.jpg").default}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div> */}
              {/* <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                تماس با ما
              </h3> */}
              {/* <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p> */}

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                {/* <i className="fa fa-map-marker text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i> */}
                <div>s</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl pb-4">شبکه های اجتماعی</h3>

              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <div
                  style={{ fontSize: "3rem" }}
                  className="media flex justify-between"
                >
                  <div className="space-y-10 flex flex-col items-center">
                    <i className="fa fa-envelope"></i>
                    <strong className="text-sm ">ایمیل</strong>
                  </div>
                  {/* <div className="space-y-10 flex flex-col items-center">
                    <i className="fa fa-phone-square"></i>
                    <strong className="text-sm ">تلفن</strong>
                  </div>
                  <div className="space-y-10 flex flex-col items-center">
                    <i class="fas fa-mobile"></i>
                    <strong className="text-sm ">تلفن همراه</strong>
                  </div> */}
                  <div className="space-y-10 flex flex-col items-center">
                    <i className="fab fa-linkedin"></i>
                    <strong className="text-sm ">لینکدین</strong>
                  </div>
                  <div className="space-y-10 flex flex-col items-center">
                    <i className="fab fa-instagram-square"></i>
                    <strong className="text-sm ">اینستاگرام</strong>
                  </div>
                </div>
              </p>

              {/* <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div> */}

              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
}
