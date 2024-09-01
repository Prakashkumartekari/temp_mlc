import React from "react";
import Fallback from "../../components/Fallback";
const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));
export const LoginScreen: React.FC<any> = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <Login {...props} />
  </React.Suspense>
);
export const RegisterScreen: React.FC<any> = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <Register {...props} />
  </React.Suspense>
);
