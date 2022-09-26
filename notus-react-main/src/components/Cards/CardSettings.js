import Comment from "components/Comment";
import Select from "components/Select";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useComment } from "context/CommentProvider";
import useAuth from "hooks/useAuth";

// component

export default function CardSettings() {
  const { auth, setAuth } = useAuth();
  console.log(auth);

  const { comment, setComment } = useComment();

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
    date: new Date().toLocaleDateString("fa-IR"),
  });

  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    setTicket((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const ticketHandler = () => {
    if (
      ticket.title.length === 0 ||
      ticket.name.length === 0 ||
      ticket.tel.length === 0 ||
      ticket.desc.length === 0
    ) {
      toast.error("موارد خالی را پر کنید");
    } else {
      setComment(ticket);
      setMsg({ msg: ticket.desc, date: ticket.date });
      setTicket({ title: "", name: "", tel: "", desc: "" });
      toast.success("پیام شما با موفقیت ثبت شد");
    }
  };

  // console.log(state);

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
              <div className="w-full md:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    موضوع
                  </label>
                  <Select
                    value={ticket.title}
                    options={options}
                    name="title"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    نام کاربری
                  </label>
                  <input
                    value={ticket.name}
                    onChange={onChange}
                    name="name"
                    type="email"
                    className="border-0  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="user@example.com"
                  />
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    شماره تماس
                  </label>
                  <input
                    value={ticket.tel}
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
                    value={ticket.desc}
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
      {msg && <Comment message={msg} />}
    </>
  );
}
