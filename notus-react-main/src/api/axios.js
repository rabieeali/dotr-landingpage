import axios from "axios";
// const LOCAL_URL = 'http://localhost:44323/';
const LOCAL_URL = "http://192.168.10.252:8800";
//const BASE_URL = 'http://localhost:8365/';
const BASE_URL = "http://nezarat.sbmu.ac.ir:8800/";








// TicketId
// TicketDetailId
// TicketProjectId
// TicketStatusId
// TicketTypeId
// Title
// Text





export default axios.create({
  baseURL: window.location.hostname.toLowerCase().includes("localhost")
    ? LOCAL_URL
    : BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: window.location.hostname.toLowerCase().includes("localhost")
    ? LOCAL_URL
    : BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  withCredentials: true,
});

export const axiosPrivateFile = axios.create({
  baseURL: window.location.hostname.toLowerCase().includes("localhost")
    ? LOCAL_URL
    : BASE_URL,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
});
