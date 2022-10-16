import { v4 as uuidv4 } from "uuid";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "hooks/useAuth";
import Modal from "components/Modal";
import { FORMS } from "index";
import Spinner from "components/Spinner";

export default function CardPageVisits() {
  const axiosPrivate = useAxiosPrivate();
  const [ticketList, setTicketList] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("1");
  const [search, setSearch] = useState();
  const [val, setVal] = useState([]);
  const [isTicketClosed, setIsTicketClosed] = useState(false);
  const { auth } = useAuth();

  const closeTicketHandler = async (TicketId) => {
    await axiosPrivate.post("/api/closeticket", { TicketId });
    setIsTicketClosed(!isTicketClosed);
  };

  const getFilter = async () => {
    // fetch data based on FORMS
    const response = await axiosPrivate.get(
      "/api/ticket/GetAllTicketList/" +
        (!auth.forms.includes(FORMS.ticketManage) ? auth.userId : "")
    );
    const data = await JSON.parse(response?.data);
    let hasSearch = data?.filter((el) => el.Title.includes(search));
    setVal(hasSearch);

    setLoading(false);
    if (status === "1") {
      setTicketList(data);
    } else if (status === "2") {
      const filteredTickets = data.filter(
        (ticket) => ticket.TicketStatusId !== 3
      );
      setTicketList(filteredTickets);
    } else if (status === "3") {
      const filteredTickets = data.filter(
        (ticket) => ticket.TicketStatusId === 3
      );
      setTicketList(filteredTickets);
    }
  };

  useEffect(() => {
    getFilter();
  }, [isTicketClosed, status, search]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-row-reverse flex-wrap">
            <div className="relative flex flex-row-reverse justify-between w-full px-4 max-w-full flex-grow flex-1 text-left">
              <h3
                className="text-right text-lg font-bold uppercase  py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                همه تیکت ها
              </h3>
              {/* search */}
              <div className="mb-3 pt-0">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="جستجو ..."
                  className="rtl px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rtl block w-full overflow-x-auto">
          {/* Projects table */}
          {loading && (
            
             <Spinner />
            
          )}
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
                  <label className="ml-2">وضعیت</label>
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    style={{ width: "70px" }}
                    className="px-2 py-1  text-blueGray-600 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline text-left"
                  >
                    <option className="IRANSans" value="1">
                      همه
                    </option>
                    <option className="IRANSans" value="2">
                      باز
                    </option>
                    <option className="IRANSans" value="3">
                      بسته
                    </option>
                  </select>
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  تاریخ
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  پروژه
                </th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
                <th className="text-right px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody>
              {(ticketList && val.length === 0 ? ticketList : val).map(
                (ticket, index) => (
                  <tr
                    key={uuidv4()}
                    className="divider text-right border-bottom"
                  >
                    <th className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {index + 1}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {`${ticket.Title} (${ticket.TicketTypeName})`}
                    </td>
                    <td
                      className={` ${
                        ticket.TicketStatusId === 3
                          ? "text-blueGray-500"
                          : "text-danger"
                      } border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`}
                    >
                      {ticket.TicketStatusId === 3 ? "بسته" : "باز"}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ticket.SaveDate.split(" ")[0]}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ticket.TicketProjectName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <Link
                        state={{ TicketStatusId: ticket.TicketStatusId }}
                        to={`/user-ticketlist/${ticket.TicketId}`}
                      >
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                          مشاهده
                        </button>
                      </Link>
                    </td>
                    <td>
                      {auth.forms.includes(FORMS.ticketManage) && (
                        <Modal
                          canClick={ticket.TicketStatusId === 3 ? true : false}
                          clickHandler={() =>
                            closeTicketHandler(ticket.TicketId)
                          }
                          header="شما در حال بستن تیکت هستید"
                          text="آیا مطمئن هستید؟"
                          btnText="بستن"
                        />
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
