import React from "react";
import { useLocation } from "react-router-dom";

import user from "../assets/img/user.png";

const Comment = (props) => {

  const location = useLocation();

  // const { TicketProjectName, TicketTypeName } = location.state;
  // TicketId: 0,
  // TicketDetailId: 0,
  // TicketProjectId: selectedProject.value,
  // TicketTypeId: selectedProject.value,
  // TicketStatusId: 0,
  // Title: ticketTitle,



  return (
    <>
    

  
       {props.length && props.prevComments?.map((cmt, ind) => (
        <section
          key={ind}
          className="rtl flex flex-col items-center p-5 mb-6 shadow-lg rounded-lg bg-lightBlue-200 border-0"
        >
          <div className=" flex w-full items-center justify-between">
            <img style={{ width: "40px", height: "40px" }} src={user} />
            <span className="ml-auto px-2 mr-1">{cmt.FullName}</span>

            <p className="text-blueGray-400 text-sm">
              {cmt.Date.split(" ")[0]} - {cmt.Date.split(" ")[1]}
            </p>
          </div>
          <div className="flex my-2 px-12 text-sm ml-auto">
            <p className="text-blueGray-400 text-sm">
              {cmt.TicketProjectName} - {cmt.TicketTypeName}
            </p>
          </div>

          <p className="text-right ml-auto m-4">
            <i className="px-2 text-blueGray-400 fa fa-comment"></i>
            {cmt.Text}
          </p>
        </section>
      ))}


    </>
  );
};

export default Comment;
