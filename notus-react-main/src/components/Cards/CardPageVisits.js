

// components

export default function CardPageVisits() {

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-row-reverse flex-wrap">
            {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Page visits
              </h3>
            </div> */}
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
                  کد درخواست
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {state !== undefined &&
                state.map((ticket, index) => (
                  <tr className="divider text-right border-bottom">
                    <th className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {index + 1}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ticket && ticket.title === "software"
                        ? "نرم افزار و پایگاه داده"
                        : "زیرساخت و شبکه"}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ticket && "باز"}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ticket?.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ticket && Math.random() * 1000}
                    </td>
                  </tr>
                ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
