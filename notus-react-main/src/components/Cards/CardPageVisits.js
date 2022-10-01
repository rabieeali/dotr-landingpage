import { v4 as uuidv4 } from "uuid";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardPageVisits() {
  const axiosPrivate = useAxiosPrivate();
  const [ticketList, setTicketList] = useState();

  const getUserTicketList = async () => {
    const response = await axiosPrivate.get("/api/ticket/GetAllTicketList/");
    const data = JSON.parse(response?.data);
    setTicketList(data);
  };
  console.log("ticket list", ticketList);

  useEffect(() => {
    getUserTicketList();
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-row-reverse flex-wrap">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-left">
              <h3
                className="text-right  text-lg font-bold uppercase  py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                همه تیکت ها
              </h3>
            </div>
          </div>
        </div>
        <div className="rtl block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="rtl text-right items-center w-full bg-transparent border-collapse">
            <thead className="rtl text-center">
              <tr className="text-right">
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  شماره
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  موضوع
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  وضعیت
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  تاریخ
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  پروژه
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody>
              {ticketList?.map((ticket, index) => (
                <tr key={uuidv4()} className="divider text-right border-bottom">
                  <th className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {`${ticket.Title} (${ticket.TicketTypeName})`}
                  </td>
                  <td className={` ${ticket.TicketStatusId === 0 ?"text-danger": ""} border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`}>
                    {ticket.TicketStatusId === 0 ? "باز" : "بسته"}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ticket.SaveDate.split(" ")[0]}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ticket.TicketProjectName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link
                      state={{
                        TicketTypeName: ticket.TicketTypeName,
                        TicketProjectName: ticket.TicketProjectName,
                      }}
                      to={`/user-ticketlist/${ticket.TicketId}`}
                    >
                      <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        مشاهده
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
