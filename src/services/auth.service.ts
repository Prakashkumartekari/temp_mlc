import axios from "axios";
import { LoginPostProps, SignInWithOTPProps } from "../types/auth";

const REACT_APP_AUTH_BASE = process.env.REACT_APP_AUTH_BASE;
const auth_url = `${REACT_APP_AUTH_BASE}/auth`;

export const sendOTPonMobile = (body: LoginPostProps) =>
  axios.post(`${auth_url}/sendOTPonMobile`, body);

export const signInWithOTP = (body: SignInWithOTPProps) =>
  axios.post(`${auth_url}/signInWithOTP`, body);
