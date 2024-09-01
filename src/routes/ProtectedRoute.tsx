import React, { PropsWithChildren } from "react";

import { Navigate } from "react-router-dom";
import useReduxState from "../hooks/useReduxState";
import { routesConstants } from "../utils/constants";

const ProtectedRoute: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isAuthenticated } = useReduxState();
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={routesConstants.login} />
  );
};

export default ProtectedRoute;
