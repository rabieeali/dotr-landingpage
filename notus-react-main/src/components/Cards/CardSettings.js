import Comment from "components/Comment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

import useAuth from "hooks/useAuth";
import useAxiosPrivate from "hooks/useAxiosPrivate";

export default function CardSettings() {
  const { auth } = useAuth();

  const [ticketDesc, setTicketDesc] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");

  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [optionTicketType, setOptionTicketType] = useState("");

  const [selectedProject, setSelectedProject] = useState(null);
  const [optionProject, setOptionProject] = useState("");

  const axiosPrivate = useAxiosPrivate();

  // انتخاب موضوع پروژه

  const loadTicketTypeCombo = async () => {
    const controller = new AbortController();

    const optionsGroupUrl = "/api/ticket/Gettables/0"; //0=>> 8 just groups of this user

    const responseOptionsGroup = await axiosPrivate.get(optionsGroupUrl, {
      signal: controller.signal,
    });
    let jResponseOptionsGroup = JSON.parse(responseOptionsGroup?.data);

    // console.log("one", jResponseOptionsGroup);

    jResponseOptionsGroup = jResponseOptionsGroup.map(
      ({ TicketTypeId, TicketTypeName }) => {
        return {
          label: TicketTypeName,
          value: TicketTypeId,
        };
      }
    );

    let og = [
      {
        label: "موضوع پروژه",
        options: [],
      },
    ];
    og[0].options = jResponseOptionsGroup;

    setOptionTicketType(og);
  };

  function handleSelectTickettype(value) {
    setSelectedTicketType(value);
  }

  // انتخاب پروژه مربوطه

  const loadProjectCombo = async () => {
    const controller = new AbortController();

    const optionsGroupUrl = "/api/ticket/Gettables/2"; //0=>> 8 just groups of this user

    const responseOptionsGroup = await axiosPrivate.get(optionsGroupUrl, {
      signal: controller.signal,
    });
    let jResponseOptionsGroup = JSON.parse(responseOptionsGroup?.data);

    // setSelectedTicketType(jResponseOptionsGroup);
    // console.log("filteredProjects", filteredProjects);

    if (selectedTicketType == null) {
      return;
    }
    console.log("selectedTicketType", selectedTicketType);

    let filteredProjects = jResponseOptionsGroup?.filter(
      (item) => item.TicketTypeId == selectedTicketType.value
    );

    console.log("filteredProjects", filteredProjects);

    filteredProjects = filteredProjects?.map(
      ({ TicketProjectId, TicketProjectName }) => {
        return {
          label: TicketProjectName,
          value: TicketProjectId,
        };
      }
    );

    let og = [
      {
        label: "نوع پروژه",
        options: [],
      },
    ];
    og[0].options = filteredProjects;

    setOptionProject(og);
  };

  function handleSelectProject(value) {
    setSelectedProject(value);
  }

  useEffect(() => {
    loadTicketTypeCombo();
  }, [window.location.pathname]);

  useEffect(() => {
    loadProjectCombo();
  }, [selectedTicketType]);

  const [ticket, setTicket] = useState({
    title: "",
    desc: "",
    date: new Date().toLocaleDateString("fa-IR"),
  });

  const [msg, setMsg] = useState("");

  // const onChange = (e) => {
  //   setTicket((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const ticketHandler = async (e) => {
    e.preventDefault();
    if (ticketTitle.length === 0 || ticketDesc.length === 0) {
      toast.error("موارد خالی را پر کنید");
    } else {
      await axiosPrivate.post("/api/ticket", {
        TicketId: 0,
        TicketDetailId: 0,
        TicketProjectId,
        TicketTypeId,
        TicketStatusId,
        Title,
        Text,
      });

      setTicketDesc("");
      setTicketTitle("");
console.log(ticketTitle,ticketDesc)
      toast.success("پیام شما با موفقیت ثبت شد");
    }
  };

  return (
    <>
      <div className="rtl relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
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
                    نوع پروژه
                  </label>
                  <Select
                    name="cmbPlaceGroup"
                    value={selectedTicketType}
                    className="border-0  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue={"37"}
                    onChange={handleSelectTickettype}
                    options={optionTicketType}
                    classNamePrefix="select2-selection"
                    // isDisabled={!GetUserRole(2)}
                  />
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    انتخاب پروژه
                  </label>
                  <Select
                    name="cmbProjectGroup"
                    value={selectedProject}
                    className="border-0  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue={"37"}
                    onChange={handleSelectProject}
                    options={optionProject}
                    classNamePrefix="select2-selection"
                    isDisabled={selectedTicketType === null}
                  />
                </div>
              </div>

              {/* <div className="w-full md:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    نام کاربری
                  </label>
                  <input
                    value={auth.userName}
                    readOnly
                    name="name"
                    type="email"
                    className="cursor-not-allowed border-0  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="user@example.com"
                  />
                </div>
              </div> */}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              توضیحات
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="w-full  md:w-4/12 px-4">
                  <div className="relative w-full mb-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      عنوان تیکت
                    </label>
                    <input
                      value={ticketTitle}
                      onChange={(e) => setTicketTitle(e.target.value)}
                      name="ticketTitle"
                      type="text"
                      className="border-0  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    چگونه میتوانیم کمکتان کنیم؟
                  </label>
                  <textarea
                    value={ticketDesc}
                    onChange={(e) => setTicketDesc(e.target.value)}
                    name="desc"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder=" مشاوره برای ..."
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              onClick={ticketHandler}
              style={{ float: "left", marginLeft: "10px" }}
              className={`  rtl flex bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150`}
              type="submit"
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
