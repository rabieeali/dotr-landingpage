import Select from "components/Select";
import React, { useState } from "react";

import { toast } from "react-toastify";
// components

export default function CardSettings() {
  const options = [
    { title: "", value: "" },
    { title: "زیر ساخت و شبکه", value: "network" },
    { title: "نرم افزار و پایگاه داده", value: "software" },
  ];

  const [ticket, setTicket] = useState({
    title: "",
    name: "",
    tel: "",
    desc: "",
  });

  const onChange = (e) => {
    setTicket((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const ticketHandler = () => {
    console.log(ticket);
    // toast.info(ticket);
  };

  return (
    <>
      <div className="rtl relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              درخواست مشاوره از ما
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              ثبت اطلاعات
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    موضوع
                  </label>
                  <Select options={options} name="title" onChange={onChange} />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    نام کاربری
                  </label>
                  <input
                    onChange={onChange}
                    name="name"
                    type="email"
                    className="border-0  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="user@example.com"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    شماره تماس
                  </label>
                  <input
                    onChange={onChange}
                    name="tel"
                    type="text"
                    className="border-0 text-left px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="...0912"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              توضیحات
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    چگونه میتوانیم کمکتان کنیم؟
                  </label>
                  <textarea
                    onChange={onChange}
                    name="desc"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder="درخواست مشاوره برای ..."
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              onClick={ticketHandler}
              style={{ float: "left", marginLeft: "10px" }}
              className="rtl flex bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              ثبت درخواست
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
