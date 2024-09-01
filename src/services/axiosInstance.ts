/* eslint-disable no-catch-shadow */
/* eslint-disable dot-notation */
import axios from "axios";
import store from "./redux/store";
import { setLoginState, setLogout } from "./redux/slices/authSlice";
const REACT_APP_AUTH_BASE = process.env.REACT_APP_AUTH_BASE;
const authAxiosInstance = axios.create({
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

authAxiosInstance.interceptors.request.use(async (req) => {
  const {
    authStore: { login_data },
  } = store.getState();
  if (login_data.token) {
    try {
      const currentTime = new Date().getTime();
      if (currentTime > login_data?.exp) {
        const body = {
          refreshToken: login_data?.refreshToken,
        };
        const { data } = await axios.post(
          `${REACT_APP_AUTH_BASE}/auth/refreshToken`,
          body
        );
        const newData = {
          ...data,
          token: data?.accessToken,
        };
        const { dispatch } = store;
        dispatch(setLoginState(newData));
        req.headers["Authorization"] = `Bearer ${data?.accessToken}`;
        return req;
      }
    } catch (error) {
      const { dispatch } = store;
      dispatch(setLogout());
    }
  }
  req.headers["Authorization"] = `Bearer ${login_data?.token}`;
  return req;
});

// schoolAxiosInstance.interceptors.request.use(async (req) => {
//   console.log("in school url", req.url, req.params, req.data);
//   const {
//     commonStore: { schoolAuthData },
//   } = store.getState();
//   const currentTime = new Date().getTime();
//   const { exp } = jwt(schoolAuthData?.obj?.accessToken);
//   if (currentTime > exp * 1000) {
//     try {
//       const refreshRes = await axios.get(
//         `${REACT_APP_AUTH_BASE}/access/schoolRefreshToken`,
//         {
//           headers: {
//             Authorization: `Bearer ${schoolAuthData?.obj?.refreshToken}`,
//           },
//         }
//       );
//       store.dispatch(setSchoolAuthData(refreshRes?.data));
//       req.headers["Authorization"] =
//         `Bearer ${refreshRes?.data?.obj?.accessToken}`;
//       return req;
//     } catch (error) {
//       const { dispatch } = store;
//       dispatch(setLogout());
//     }
//   }
//   req.headers["Authorization"] = `Bearer ${schoolAuthData?.obj?.accessToken}`;
//   return req;
// });

export { authAxiosInstance };
