import React, { useEffect, useState } from "react";

// components

// import CardSettings from "components/Cards/CardSettings.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import Comment from "components/Comment";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "hooks/useAuth";

export default function TicketComment() {
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [ticketComments, setTicketComments] = useState();
  const [cmt, setCmt] = useState("");

  const auth = useAuth();

  console.log("cm", auth);

  const getTicketComments = async () => {
    const response = await axiosPrivate.get(
      `/api/ticket/GetTicketDetailList/${id}`
    );
    const data = await JSON.parse(response?.data);
    setTicketComments(data);
  };
  console.log("ticket comments", ticketComments);

  useEffect(() => {
    getTicketComments();
  }, []);

  const submitHandler = async () => {
    if (cmt.length === 0) {
      toast.error("موارد خالی را پر کنید", {
        style: {
          borderRadius: "10px",
          background: "#333d55",
          color: "#fff",
        },
      });
    } else {
      try {
        const response = await axiosPrivate.post(`/api/ticket/`, {
          TicketId: id,
          TicketDetailId: 0,
          TicketProjectId: 0,
          TicketTypeId: 0,
          TicketStatusId: auth.userTypeId === 1 || 2 ? 2 : 1,
          Title: "",
          Text: cmt,
        }); //==> it returns a number (id of comment) , if ith's over 0 you need to render again
        window. location. reload()
        Number(response?.data) > 0
          ? toast.success("با موفقیت ذخیره شد")
          : toast.error("خطا");
       

      } catch (err) {
        console.log(err);
        toast.error(err?.message);
      }
    }
  };

  return (
    <>
      <div className="relative  md:ml-64 h-screen bg-blueGray-100">
        <AdminNavbar />
        <div className="w-4/12 px-4">
          <Sidebar />
        </div>
        <div className="rtl w-full flex flex-col g-2 pt-32 px-4">
          <div>
            <div className="flex items-center pb-2 justify-between">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                ارسال نظر جدید
              </label>
              <button
                onClick={submitHandler}
                type="submit"
                className=" bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                ارسال
              </button>
            </div>
            <textarea
              value={cmt}
              onChange={(e) => setCmt(e.target.value)}
              name="desc"
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
              placeholder=" درخواست..."
            ></textarea>
          </div>
          <hr/>
          <Comment ticketComments={ticketComments} />
        </div>
      </div>
    </>
  );
}
