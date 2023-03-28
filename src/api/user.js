import axios from "axios"
import { BASE_URL } from "./axios"
export const AuthApi = {
  registerThunk: async (userDetails) => {
    return await axios.post(`${BASE_URL}/auth/register`, userDetails)
  },
  loginThunk: async (userDetails) => {
    return await axios.post(`${BASE_URL}/auth/login`, userDetails)
  },
} 
