import React from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="">
      <button
      disabled={props.canClick}
        className={` ${props.canClick ? "bg-light-danger" : "bg-danger" }  text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {props.btnText}
      </button>
      {showModal ? (
        <>
          <div
            className="text-white justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id="modal"
            onClick={() => setShowModal(false)}
          >
            <div
              style={{ minWidth: "70%" }}
              className="relative my-6 mx-auto max-w-3xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" bg-lightBlue-200 text-blueGray-700 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">{props.header}</h3>
                  <button
                    style={{ marginRight: "auto" }}
                    className=" bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="bg-lightBlue-200 relative p-6 flex-auto">
                  <p className="my-4 text-red-500 pr-4 text-lg leading-relaxed">
                    {props.text}
                  </p>
                </div>
                {/*footer*/}
                <div className="bg-lightBlue-200 text-blueGray-700 flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    خیر
                  </button>
                  <button
                    className="m-4 bg-darkBlue-700 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                    onClick={() => props.clickHandler()}
                  >
                    بله
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
