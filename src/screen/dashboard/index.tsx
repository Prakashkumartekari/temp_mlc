import React from "react";
import Fallback from "../../components/Fallback";

const Dashboard = React.lazy(() => import("./Dashboard"));
export const DashboardScreen: React.FC<any> = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <Dashboard {...props} />
  </React.Suspense>
);
