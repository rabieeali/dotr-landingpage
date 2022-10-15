import React from "react";

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

              <p className={` text-sm 
  
            `}>
                {cmt.Date.split(" ")[0]} - {cmt.Date.split(" ")[1]}
              </p>
            </div>
            {/* <div className="flex my-2 px-12 text-sm ml-auto">
              <p className="text-white text-sm">
                {cmt.TicketProjectName} - {cmt.TicketTypeName} 
              </p>
            </div> */}

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
