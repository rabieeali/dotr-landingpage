import React from "react";

import user from "../assets/img/user.png";

const Comment = ({ message }) => {
  let arr = [];
  arr.push(message);
  return (
    <>
      {arr.map((msg, ind) => (
        <section
          key={ind}
          className="rtl flex flex-col items-center p-5 mb-6 shadow-lg rounded-lg bg-lightBlue-200 border-0"
        >
          <div className=" flex w-full items-center justify-between">
            <img style={{ width: "40px", height: "40px" }} src={user} />
            {/* <span className=" ml-auto mr-1">شما</span> */}
            <p className="text-sm">{msg.date}</p>
          </div>
          <p className=" text-right ml-auto m-4">
            {msg.msg}
          </p>
        </section>
      ))}
    </>
  );
};

export default Comment;
