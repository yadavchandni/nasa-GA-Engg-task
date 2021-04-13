import axios from "axios";
import Cookie from "js-cookie";

const URL = process.env.NODE_ENV !== "production " ? "https://api.nasa.gov/neo/rest/v1/neo" : "";

const defaultAxios = axios.create({
  baseURL: URL,
  // baseURL:process.env.REACT_APP_API_URL
});

const token = Cookie.get("token");

defaultAxios.defaults.headers.common["Authorization"] = "Bearer " + token;

export default defaultAxios;
