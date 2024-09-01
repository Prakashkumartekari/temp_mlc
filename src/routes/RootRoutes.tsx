import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";

import { routesConstants } from "../utils/constants";
import ProtectedRoute from "./ProtectedRoute";
import { LoginScreen, RegisterScreen } from "../screen/auth";
import { DashboardScreen } from "../screen/dashboard";
import { StaffsScreen } from "../screen/staffs";
import { VotersScreen } from "../screen/voters";
import { IntstituteScreen } from "../screen/institute";

const configRoutes: RouteObject[] = [
  {
    path: routesConstants.home,
    element: (
      <ProtectedRoute>
        <Layout>
          <Outlet />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: routesConstants.home,
        element: (
          <ProtectedRoute>
            <Navigate to={routesConstants.dashboard} />
          </ProtectedRoute>
        ),
      },
      {
        path: routesConstants.dashboard,
        element: (
          <ProtectedRoute>
            <DashboardScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: routesConstants.staff,
        element: (
          <ProtectedRoute>
            <StaffsScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: routesConstants.voter,
        element: (
          <ProtectedRoute>
            <VotersScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: routesConstants.institute,
        element: (
          <ProtectedRoute>
            <IntstituteScreen />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: routesConstants.login,
    element: <LoginScreen />,
  },
  {
    path: routesConstants.register,
    element: <RegisterScreen />,
  },
];
const RootRoutes = () => {
  const routes = useRoutes(configRoutes);
  return <>{routes}</>;
};

export default RootRoutes;
