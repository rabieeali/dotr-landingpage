import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// components

// import CardSettings from "components/Cards/CardSettings.js";

import useAxiosPrivateFile from "../hooks/useAxiosPrivateFile";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import { useParams, useLocation, Link } from "react-router-dom";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import Comment from "components/Comment";
import toast from "react-hot-toast";
import Dropzone from "react-dropzone";
import useAuth from "hooks/useAuth";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function TicketComment() {
  const axiosPrivateFile = useAxiosPrivateFile();
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [ticketComments, setTicketComments] = useState();
  const [cmt, setCmt] = useState("");
  const [selectedFiles, setselectedFiles] = useState([]);
  const [uniqueCommentId, setUniqueCommentId] = useState();
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [isPreview, setIsPreview] = useState("block");
  const [isPreviewNot, setIsPreviewNot] = useState("none");
  const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);

  const auth = useAuth();
  const location = useLocation();
  const TicketStatusId = location.state.TicketStatusId;

  function togglePreview() {
    if (isPreview == "block") {
      setIsPreview("none");
      setIsPreviewNot("block");
    } else {
      setIsPreview("block");
      setIsPreviewNot("none");
    }
  }

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
      toast.error(" قسمت درخواست را را پر کنید", {
        style: {
          borderRadius: "10px",
          background: "#333d55",
          color: "#fff",
        },
      });
    } else {
      try {
        const res = await axiosPrivate.post(`/api/ticket/`, {
          TicketId: id,
          TicketDetailId: 0,
          TicketProjectId: 0,
          TicketTypeId: 0,
          TicketStatusId: auth.userTypeId === 1 || 2 ? 2 : 1,
          Title: "",
          Text: cmt,
        }); //==> it returns a number (id of comment) , if ith's over 0 you need to render again
        setUniqueCommentId(res);

        if (Number(res?.data) && Number(res?.data) > 0) {
          const formData = new FormData();
          selectedFiles?.forEach((element) => {
            element.UniqueId = Number(res?.data);
            element.ImageTypeId = 3;

            formData.append("selectedFile", element);
          });

          formData.append("imageType", 3);
          formData.append("uniqueId", Number(res?.data));

          const response = await axiosPrivateFile.post(
            "/api/FileUpload",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
              withCredentials: true,
            }
          );

          const jResponse = JSON.parse(response?.data);

          if (jResponse > 0) {
            toast.success("فایلها با موفقیت ذخیره شد");
            // loadSavedFiles(Number(res?.data));
            setselectedFiles([]);
          } else {
            toast.error("ذخیره ناموفق");
          }
          toast.success("با موفقیت ذخیره شد");
          window.location.reload();
        } else {
          toast.error("خطا");
        }
      } catch (err) {
        console.log(err);
        toast.error(err?.message);
      }
    }
  };

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // const loadSavedFiles = async (arg) => {
  //   const controller = new AbortController();

  //   const optionsStateUrl = "/api/FileUpload/GetVisitationDoc/" + arg;
  //   // myimageType == 4? '/api/FileUpload/GetVisitationItemDoc/' + arg
  //   // : myimageType == 5? '/api/FileUpload/GetProblemItemDoc/' + arg
  //   // : myimageType == 7 ? '/api/FileUpload/GetReferDocs/' + arg
  //   // : myimageType == 9 ? '/api/FileUpload/GetVisitationEndPdf/' + arg
  //   // : myimageType == 3 ? '/api/FileUpload/GetVisitationDoc/' + arg
  //   // : myimageType ==1 ?  '/api/FileUpload/GetAvatar/' + arg : null;
  //   const responseOptionsState = await axiosPrivate.get(optionsStateUrl, {
  //     signal: controller.signal,
  //   });

  //   let jResponseOptionsState = JSON.parse(responseOptionsState?.data);
  //   console.log("GetVisitationItemDoc--------------", jResponseOptionsState);
  //   //console.log("GetVisitationItemDoc--------------", jResponseOptionsState);

  //   setUploadedFiles(jResponseOptionsState);
  // };

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getSavedFiles = async () => {
  //     try {
  //       // if (myuniqueId > 0) {

  //       isMounted && loadSavedFiles();
  //       // }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getSavedFiles();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);



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
              <div className="flex gap-2">
                <button
                  disabled={TicketStatusId == 3 ? true : false}
                  onClick={submitHandler}
                  type="submit"
                  className={` ${
                    TicketStatusId == 3
                      ? "bg-disabled"
                      : "bg-lightBlue-500  active:bg-lightBlue-600"
                  } text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                >
                  ارسال
                </button>
              </div>
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
          <div className="drop-it-here">
            <form>
              <Dropzone
                disabled={TicketStatusId == 3 ? true : false}
                accept="image/*,application/pdf"
                //    "image/*,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                // For .docx - application/vnd.openxmlformats-officedocument.wordprocessingml.document
                // For .xlxs - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
                // For .xls application/vnd.ms-excel
                // For .doc - application/msword

                onDrop={(acceptedFiles) => {
                  handleAcceptedFiles(acceptedFiles);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    className="dropzone dz-clickable"
                    style={{ minHeight: "100px" }}
                  >
                    <div
                      style={{ margin: "0.2em 0", cursor: "pointer" }}
                      className="dz-message needsclick"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <div className="mb-3">
                        <i className="display-4 text-muted mdi mdi-upload-network-outline"></i>
                      </div>
                      <h4>فایلها را در این پنجره رها کرده و یا کلیک کنید.</h4>
                      <FaCloudUploadAlt className="upload-icon text-center pt-2 mx-auto" />
                    </div>
                  </div>
                )}
              </Dropzone>
              <div className="dropzone-previews mt-3" id="file-previews">
                {selectedFiles.map((f, i) => {
                  return (
                    <div
                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                      key={uuidv4()}
                    >
                      <div className="p-2">
                        <div className="align-items-center">
                          <div className="col-auto">
                            <img
                              data-dz-thumbnail=""
                              height="80"
                              className="avatar-sm rounded bg-light"
                              alt={f.name}
                              src={f.preview}
                            />
                          </div>
                          <div>
                            <Link
                              to="#"
                              className="text-muted font-weight-bold"
                            >
                              {f.name}
                            </Link>
                            <p className="mb-0">
                              <strong>{f.formattedSize}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </form>

            <div className="text-center mt-4">
              {/* <button
                      type="button"
                      className="btn btn-primary waves-effect waves-light"
                      onClick={handleSubmit}
                    >
                      ذخیره فایلها
                    </button> */}
            </div>
          </div>
          <hr />
          <h3 className="cm-section"> نظرات</h3>

          <Comment ticketComments={ticketComments}/>
        </div>
      </div>
    </>
  );
}
