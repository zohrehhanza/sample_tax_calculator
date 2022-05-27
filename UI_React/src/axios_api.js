
// Create axios object, we can assign more attributes to them like the jwt token for the security

import axios from "axios";
import { API_URL } from "./url_settings";


export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout:5000,
  headers: {
      'Content-Type': 'application/json',
      accept: "application/json",
  }
})