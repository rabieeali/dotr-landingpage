import useAxiosPrivate from "hooks/useAxiosPrivate";
import useAxiosPrivateFile from "hooks/useAxiosPrivateFile";
import React, { useEffect } from "react";
import { FaPaperclip } from "react-icons/fa";

import user from "../assets/img/user.png";

const Comment = ({ ticketComments }) => {
  console.log(ticketComments);

  // const { TicketProjectName, TicketTypeName } = location.state;
  // TicketId: 0,
  // TicketDetailId: 0,
  // TicketProjectId: selectedProject.value,
  // TicketTypeId: selectedProject.value,
  // TicketStatusId: 0,
  // Title: ticketTitle,

  // const axiosPrivateFile = useAxiosPrivateFile();
  // const axios = useAxiosPrivate();

  // const getFiles = async () => {
  //   const URL = "/api/FileUpload/" ;
  //   const res = await axios.get(URL);
  //   const data = res?.data;
  //   console.log(data);
  // };


  // useEffect(() => {
  //   getFiles();
  // }, []);

  return (
    <>
      {ticketComments
        ?.map((cmt, ind) => (
          <section
            key={cmt.TicketDetailId}
            className={`rtl flex flex-col my-2 items-center p-2 shadow-lg rounded-lg ${
              cmt.FullName === "سیستم - مشتزی"
                ? "bg-lightBlue-200 text-black"
                : "bg-darkBlue-700 text-white"
            } border-0`}
          >
            <div className=" flex w-full items-center justify-between">
              <img style={{ width: "40px", height: "40px" }} src={user} />
              <span className="ml-auto px-2 mr-1">{cmt.FullName}</span>
              <div className="flex flex-col">
                <p
                  className={` text-sm 
  
            `}
                >
                  {cmt.Date.split(" ")[0]} - {cmt.Date.split(" ")[1]}
                </p>

                <FaPaperclip className="mr-auto mt-2 cursor-pointer hover:text-red-600" />
              </div>
            </div>
            <p className="text-right ml-auto m-4">
              <i className="px-2 text-white fa fa-comment"></i>
              {cmt.Text}
            </p>
          </section>
        ))
        .reverse()}
    </>
  );
};

export default Comment;
