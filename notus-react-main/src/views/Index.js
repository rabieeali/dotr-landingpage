/*eslint-disable*/
import React, { useState } from "react";
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
import laptop from "../assets/img/laptop.jpg";
import GoogleMap from "components/googleMap/GoogleMap";

import First from "../assets/img/screenshots/1.png";
import Second from "../assets/img/screenshots/2.png";
import Third from "../assets/img/screenshots/3.png";
import Fourth from "../assets/img/screenshots/4.png";
import Fifth from "../assets/img/screenshots/5.png";
import Sixth from "../assets/img/screenshots/6.png";
import Seventh from "../assets/img/screenshots/7.png";
import Eighth from "../assets/img/screenshots/8.png";
import Beheshti from "../assets/img/beheshti.png";

import ProjectCard from "components/ProjectCard";

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
                className="blur font-semibold w-full text-4xl md:text-4xl text-white "
              >
                راه حل نهایی مسائل شما
              </h2>
              <div className="mt-10 px-12">
                <Link to="/auth" className="neon-btn" target="_blank">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  ورود
                </Link>
              </div>
            </div>
          </div>
        </div>
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
              </p>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="rounded-lg" src={laptop} alt="pic" />
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
      </section>
      <section className="px-4 mb-24" id="lightbox">
        <h1 className="text-blueGray-700 text-3xl mb-2 font-semibold leading-normal text-2xl text-right border-divider">
          پروژه ها
        </h1>

        <div className="flex  flex-wrap justify-center g-2">
          <ProjectCard
            logo={Beheshti}
            images={[First,Second,Third,Fourth,Fifth, Sixth, Seventh,Eighth]}
            thumbnail={First}
          />
        </div>
      </section>
      <section className=" bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center space-x-10">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <GoogleMap />
            </div>
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <p className="text-3xl font-bold text-white mt-32 text-center">
                لوکیشن
              </p>
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

              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
}
