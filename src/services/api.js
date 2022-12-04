import axios from "axios";

const token = localStorage.getItem("@AGENDA-TOKEN");

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { Authorization: "Bearer" + token },
  timeout: 8000,
});
