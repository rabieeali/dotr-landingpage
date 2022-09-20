import CardSettings from "components/Cards/CardSettings";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

const Ticket = () => {
  const style = {
    direction: 'rtl',

  }
  return (
    <>
      <main className="mt-20 container px-4 mx-auto flex">
        <h1 style={style} className="text-5xl font-bold flex items-center align-center justify-center mx-auto">
          کاربر عزیز خوش آمدید.
        </h1>

        <Sidebar className="w-full md:w-5/12 px-4" />
      </main>
    </>
  );
};

export default Ticket;
