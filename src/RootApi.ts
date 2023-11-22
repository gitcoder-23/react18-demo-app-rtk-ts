import axios from "axios";
import { baseUrl } from "./config/index";
export const RootApi = axios.create({
  baseURL: baseUrl,
});
