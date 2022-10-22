import useAxiosPrivate from "hooks/useAxiosPrivate";
import useAxiosPrivateFile from "hooks/useAxiosPrivateFile";
import React, { useEffect, useState } from "react";
import { FaComment, FaFileAlt, FaFilePdf, FaPaperclip } from "react-icons/fa";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

import user from "../assets/img/user.png";

const Comment = ({ ticketComments }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#333d55",
      color: "#fff",
      minWidth: "400px",
      maxHeight: "70%",
      overflowY: "auto",
    },
  };

  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log("uploadedFiles", uploadedFiles);

  // console.log(ticketComments);

  // const { TicketProjectName, TicketTypeName } = location.state;
  // TicketId: 0,
  // TicketDetailId: 0,
  // TicketProjectId: selectedProject.value,
  // TicketTypeId: selectedProject.value,
  // TicketStatusId: 0,
  // Title: ticketTitle,

  const axiosPrivateFile = useAxiosPrivateFile();
  const axios = useAxiosPrivate();

  const getFiles = async (id) => {
    if (id) {
      const URL = `/api/FileUpload/GetTicketDoc/${id}`;
      const res = await axios.get(URL);
      const data = res?.data;
      setUploadedFiles(data);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      {ticketComments
        ?.map((cmt) => (
          <>
            <section
              key={uuidv4()}
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

                  <FaPaperclip
                    onClick={() => {
                      openModal();
                      getFiles(cmt.TicketDetailId);
                    }}
                    className="mr-auto mt-2 cursor-pointer attached"
                  />
                </div>
              </div>
              <p className="text-right flex ml-auto m-4">
                <FaComment className="text-white " />
                <span className="mr-2">{cmt.Text}</span>
              </p>
            </section>
          </>
        ))
        .reverse()}
      <>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="rtl flex flex-col g-2">
            <header className="font-bold">فایل های ارسال شده</header>
            <section className="my-4 text-blueGray-500 text-lg leading-relaxed">
              {uploadedFiles &&
                JSON.parse(uploadedFiles).map((file, i) =>
                  file.Extension.toLowerCase() == ".pdf" ? (
                    <a className="text-white flex m-auto text-center flex-wrap jutify-center items-center text-5xl cursor-pointer" href={pdfPreview} download>
               <FaFileAlt
                    className="text-center mx-auto"
                      key={uuidv4()}
                      onClick={() =>
                        setPdfPreview(
                          `data:application/pdf;base64,${file.BinaryImage}`
                        )
                      }
                    />
                    </a>
                  ) : (
                    <>
                      <a className="bg-lightBlue-500 text-white active:bg-red-200 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer" href={imagePreview} download>
                      <img
                        key={uuidv4()}
                        style={{
                          width: "100%",
                          maxHeight: "400px",
                          padding: "10px 0",
                        }}
                        onClick={() =>
                          setImagePreview(`data:image/jpeg;base64,${file.BinaryImage}`)
                        }
                        src={`data:image/jpeg;base64,${file.BinaryImage}`}
                      />
                      </a>
                    </>
                  )
                )}
            </section>
            <footer className="flex flex-row-reverse g-2">
              <button
                className="bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={closeModal}
              >
                بستن
              </button>
            </footer>
          </div>
        </Modal>
      </>
    </>
  );
};

export default Comment;
